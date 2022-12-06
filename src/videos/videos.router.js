//const passport = require('passport')
const router = require('express').Router()
//const adminValidate = require('../middlewares/role.middleware')
const videoServices = require('./videos.services')

//require('../middlewares/auth.middleware')(passport)


//? rutas raiz




//? rutas dinamicas por ID /videos/:id

//! router.get('/:id')
//! router.patch('/:id')
//! router.put('/:id')
//! router.delete('/:id')


router.route('/')
    .get(videoServices.getAllVideos)
    .post(
//        passport.authenticate('jwt', {session: false}),
        videoServices.registerVideo
    )


router.route('/:id')
    .get(
//        passport.authenticate('jwt', {session: false}),
        videoServices.getVideoById)
//    .put(
//        passport.authenticate('jwt', {session: false}),
//        videoServices.registerVideo)
    .patch(
//        passport.authenticate('jwt', {session: false}),
        videoServices.patchVideo)
    .delete(
//        passport.authenticate('jwt', {session: false}),
        videoServices.deleteVideo
    )
/*
    //? /api/v1/videos/:id
router.route('/admin/:id')
.get(videoServices.getVideoById)
.patch(
//    passport.authenticate('jwt', {session: false}),
//    adminValidate,
    videoServices.patchVideo)
.delete(
//    passport.authenticate('jwt', {session: false}),
//    adminValidate,
    videoServices.deleteVideo)

    
    */
//? /api/v1/videos/courses/course_id/
router.route('/list-videos/:course_id')
    .get(videoServices.getVideosByCourseId)
module.exports = router
