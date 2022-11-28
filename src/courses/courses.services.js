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


const createCourse = (req, res) => {
    //? Este es el id del usuario loggeado
    const userId = req.user.id 
    const { title, description, categoryId, videoId } = req.body
    if(title && description && categoryId && videoId){
        coursesControllers.createCourse({title, description, userId, categoryId, videoId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                description: 'string',
                categoryId: 'uuid',
                videoId: 'uuid'
            }
        })
    }

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

module.exports = {
    createCourse,
    getAllCourses,
    getCoursesByCategory
};












//? /api/v1/recipe/2/ingredients/8
//? router.get('/api/v1/recipe/:recipe_id/ingredients/:ingredient_id')
const getRecipeById = (req, res) => {
    const id = req.params.recipe_id 
    recipeControllers.getRecipeById(id)
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

const createRecipe = (req, res) => {
    const userId = req.user.id
    const {title, description, urlImg, time, portions, categoryId, origin} = req.body

    if(title && description && time && portions && categoryId){
        recipeControllers.createRecipe({
            title, description, urlImg, time, portions, categoryId, origin, userId
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                description: 'string',
                time: 'number',
                portions: 'number',
                categoryId: 'number'
            }
        })
    }
}

const patchRecipe = (req, res) => {
    const { title, description, urlImg, time, portions, categoryId, origin } = req.body
    const id = req.params.recipe_id
    recipeControllers.updateRecipe(id, {title, description, urlImg, time, portions, categoryId, origin})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Recipe with ID: ${id} edited succesfully`})
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })  
}

const deleteRecipe = (req, res) => {
    const id = req.params.recipe_id

    recipeControllers.deleteRecipe(id)
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

const getUserRecipes = (req, res) => {
    const userId = req.user.id
    recipeControllers.getMyRecipes(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe, 
    patchRecipe,
    deleteRecipe,
    getUserRecipes
}