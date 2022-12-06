const uuid = require('uuid')
const {Op} = require('sequelize')
const Categories = require('../models/categories.models')
const Courses = require('../models/courses.models')
const Users = require('../models/users.models')
const Videos = require('../models/videos.models')
//const { hashPassword } = require('../utils/crypto')

const getAllCourses = async() => {
    const data = await Courses.findAll()
    return data
  }

const getCourseById = async(id) => {
    const data = await Courses.findOne({
        where: {
            id
        },

    })
    return data
}

/*const getVideosByCourseId = async (id) =>{
    const data = await Videos.findAll({
        attributes: ['coursesId'],
        where: {
            userId
        }
    })
    return data
}*/

const createCourse = async (data) => {
    const response = await Courses.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description, 
        categoryId: data.categoryId
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
    getMyCourses,
};
