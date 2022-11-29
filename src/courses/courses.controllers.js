const uuid = require('uuid')
const {Op} = require('sequelize')
const Categories = require('../models/categories.models')
const Courses = require('../models/courses.models')
const Users = require('../models/users.models')
const { hashPassword } = require('../utils/crypto')

const getAllCourses = async(offset, limit) => {
    const data = await Courses.findAll({
        offset: offset,
        limit: limit,
        attributes: {
            exclude: ['courseId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Courses,
                as: 'Course',
                attributes: ['id', 'title', 'description', 'categoryId']
            },
            {
                model: Categories
            },
            {
                model: Users,
                attributes: ['id', 'firstName', 'lastName']
            }
        ]
    })
    return data
}

const getCourseById = async(id) => {
    const data = await Courses.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['courseId', 'createdAt', 'updatedAt']
         },
        include: [
            {
                model: Courses,
                as: 'course',
                attributes: ['id', 'title', 'description', 'categoryId']
            },
            {
                model: Categories,
            },
            {
                model: Users,
                attributes: ['id', 'firstName', 'lastName']
            }
        ]
    })
    return data
}

const createCourse = async (data) => {
    const response = await Courses.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        userId: data.userId, //? este es el user id que viene desde el token
        categoryId: data.categoryId,
        videoId:  data.videoId
    })
    return response
}

const getCoursesByCategory = async (categoryId) => {
    const data = await Courses.findAll({
        where: {
            categoryId
        }
    })
    return data
}


const updateCourse = async (id, data) => {
    const response = await Courses.update(data, {
        where: {
            id
        }
    })
    return response
}

const deleteCourse = async (id) => {
    const data = await Courses.destroy({
        where: {
            id
        }
    })
    return data
}
//*Filtrar cursos por usuario
const getMyCourses = async(userId) => {
    const userCourses = await UsersCourses.findAll({
        attributes: ['coursesId'],
        where: {
            userId
        }
    })

    const filteredCourses = userCourses.map(obj => obj.coursesId)

    const data = await Courses.findAll({
        where: {
            id: {
                [Op.in]: filteredCourses
            }
        }
    })

    return data
} 

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    getCoursesByCategory,
    updateCourse,
    deleteCourse,
    getMyCourses
};
