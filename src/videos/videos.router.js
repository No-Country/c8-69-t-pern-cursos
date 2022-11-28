const passport = require('passport')
const router = require('express').Router()
const adminValidate = require('../middlewares/role.middleware')
const videoServices = require('./videos.services')

require('../middlewares/auth.middleware')(passport)


//? rutas raiz

router.get('/', videoServices.getVideoById)


//? rutas dinamicas por ID /videos/:id

//! router.get('/:id')
//! router.patch('/:id')
//! router.put('/:id')
//! router.delete('/:id')


router.route('/teacher/videos')
    .get(
        passport.authenticate('jwt', {session: false}),
        videoServices.getVideoById)
    .put(
        passport.authenticate('jwt', {session: false}),
        videoServices.registerVideo)
    .patch(
        passport.authenticate('jwt', {session: false}),
        videoServices.patchVideo)
    .delete(
        passport.authenticate('jwt', {session: false}),
        videoServices.deleteVideo
    )

    //? /api/v1/videos/:id
router.route('/:id')
.get(videoServices.getVideoById)
.patch(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    videoServices.patchVideo)
.delete(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    videoServices.deleteVideo)