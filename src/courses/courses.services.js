const coursesControllers = require('./courses.controllers');
//const videosControllers = require('../videos/videos.controllers')
const { host } = require('../config')

const getAllCourses = (req, res) => {
    coursesControllers.getAllCourses()
        .then(data => {
            res.status(200).json(data)
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
    const { title, description, userId, categoryId } = req.body
    if(title && description && userId  && categoryId ){
        coursesControllers.createCourse({title, description, userId, categoryId})
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
                userId: "uuid",
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


/*const getVideosByCourseId = (req, res) => {
    const courseId = req.course.id
    videosControllers.getVideosByCourseId(courseId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(400).json({message: err.message})
        })
}*/

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    patchCourse,
    getCoursesByCategory,
    deleteCourse,
    getUserCourses,
   // getVideosByCourseId
};











