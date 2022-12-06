const router = require('express').Router()
//const passport = require('passport')

const coursesServices = require('./courses.services')

//require('../middlewares/auth.middleware')(passport)



//? /courses 
//? /courses/:course_id

router.route('/')
    .get(coursesServices.getAllCourses)
    .post(
//        passport.authenticate('jwt', {session: false}),
        coursesServices.createCourse
    )

router.route('/:course_id')
    .get(coursesServices.getCourseById)
    .patch(
//        passport.authenticate('jwt', {session: false}),
        coursesServices.patchCourse
    )
    .delete(
//        passport.authenticate('jwt', {session: false}),
        coursesServices.deleteCourse
    )
//? /api/v1/videos/courses/course_id/
//router.route('/:course_id/list_courses')
//.get(videoServices.getVideosByCourseId)

module.exports = router;
    

