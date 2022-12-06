const coursesControllers = require('./courses.controllers');
const { host } = require('../config')

const getAllCourses = (req, res) =>{
    //? localhost:9000/api/v1/courses?offset=0&limit=20
    const offset = Number(req.query.offset) || 0
    //! const offset = req.query.offset ? req.query.offset : 0
    const limit = Number(req.query.limit) || 10
    //? offset: donde inicia
    //? limit: cantidad maxima de entidades a mostrar por pagina
const urlBase = `${host}/api/v1/courses`
coursesControllers.getAllCourses(offset, limit)
        .then(data => {
            res.status(200).json({
                next: `${urlBase}?offset=${offset + limit}&limit=${limit}` ,
                prev: `${urlBase}`,
                offset,
                limit,
                results: data
            })
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

//? /api/v1/courses/2/users/
//? router.get('/api/v1/courses/:course_id')
//? /api/v1/user/2/courses/8
//? router.get('/api/v1/courses/:course_id/usuers/:user_id')

const getCourseById = (req, res) => {
    const id = req.params.course_id 
    coursesControllers.getCourseById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const createCourse = (req, res) => {
    //const userId = req.user.id 
    const { title, description, categoryId } = req.body
    if(title && description  && categoryId ){
        coursesControllers.createCourse({title, description,  categoryId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: "Principios de ",
                description: "Aprende ...",
                categoryId: "int"
            }
        })
    }

}

const patchCourse = (req, res) => {
    const { title, description, categoryId, videoId } = req.body
    const id = req.params.courses_id
    coursesControllers.updateCourse(id, { title, description, categoryId, videoId })
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Course with ID: ${id} edited succesfully`})
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })  
}

const getCoursesByCategory = (req, res) => {
    const categoryId = req.params.id 
    coursesControllers.getCoursesByCategory(categoryId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const deleteCourse = (req, res) => {
    const id = req.params.course_id

    coursesControllers.deleteCourse(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const getUserCourses = (req, res) => {
    const userId = req.user.id
    coursesControllers.getMyCourses(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    patchCourse,
    getCoursesByCategory,
    deleteCourse,
    getUserCourses
};











