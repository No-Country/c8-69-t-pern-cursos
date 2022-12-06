const uuid = require('uuid')

const Videos = require('../models/videos.models')
const Courses = require('../models/courses.models')


const getAllVideos = async() => {
  const data = await Videos.findAll()
  return data
}


const getVideoById = async (id) =>{
    const data = await Videos.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createVideo = async (data) => {
    const newVideo = await Videos.create({
        id: uuid.v4(),
        title: data.title,
        url: data.url,
        number: data.number

    })
    return newVideo
}

const updateVideo = async (id, data) => {
  const result = await Videos.update(data,{
    where: {
        id
    }
  })
  return result
}

const deleteVideo = async (id) => {
  const data = await Videos.destroy({
    where: {
        id
    }
  })
  return data
}

/*
const getVideosByCourse = async(courseId) =>{
  const videosCourse = await Videos.findAll({
    attributes: ['course_id'],
    where : {
      courseId
    }
  })

const filteredVideos = videosCourse.map(obj => obj.course_id)


return filteredVideos
}
*/

 const getVideosByCourseId = async (course_id) =>{
    const data = await Videos.findAll({
        where: {
            course_id: course_id
        }
    })
    return data
}
 


module.exports = {
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
    getVideosByCourseId
};

