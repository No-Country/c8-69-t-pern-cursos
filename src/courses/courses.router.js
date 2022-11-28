const router = require('express').Router()
const passport = require('passport')

const coursesServices = require('./courses.services')
require('../middlewares/auth.middleware')(passport)



//? /courses 
//? /courses/:course_id

router.route('/')
    .get(coursesServices.getAllCourses)
    .post(
        passport.authenticate('jwt', {session: false}),
        coursesServices.createCourse
    )

router.route('/:course_id')
    .get(coursesServices.get getRecipeById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        recipeServices.patchRecipe
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        recipeServices.deleteRecipe
    )


module.exports = router