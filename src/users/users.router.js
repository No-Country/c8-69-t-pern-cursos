const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const userServices = require('./users.services')
const {getUserCourses} = require('../courses/courses.services')
    
    '../recipes/recipes.services'
require('../middlewares/auth.middleware')(passport)


//? rutas raiz

router.get('/', userServices.getAllUsers)


//! router.route('/').get( userServices.getAllUsers)

//? rutas dinamicas por ID /users/:id

//! router.get('/:id')
//! router.patch('/:id')
//! router.put('/:id')
//! router.delete('/:id')

//? Ruta de informacion propia del usuario loggeado
router.route('/me')
.get(
    passport.authenticate('jwt', {session: false}),
    userServices.getMyUser)
.patch(
    passport.authenticate('jwt', {session: false}),
    userServices.patchMyUser
)
.delete(
    passport.authenticate('jwt', {session: false}),
    userServices.deleteMyUser
)

//* Agregar la ruta para obtener mis cursos
router.get('/me/my_courses', 
    passport.authenticate('jwt', {session: false}),
    getUserCourses
)

//? /api/v1/users/:id
router.route('/:id')
.get(userServices.getUserById)
.patch(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    userServices.patchUser
)
.delete(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    userServices.deleteUser
)





module.exports = router