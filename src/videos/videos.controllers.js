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

const getVideosByCourseId = async (courseId) =>{
  const data = await Videos.findAll({
      attributes: ['id','title', 'url', 'number','courseId'],
      where: {
          courseId: courseId
      }
  })
  return data
}

const createVideo = async (data) => {
    const newVideo = await Videos.create({
        id: uuid.v4(),
        title: data.title,
        url: data.url,
        number: data.number,
        courseId: data.courseId

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


 


module.exports = {
    getAllVideos,
    getVideoById,
    getVideosByCourseId,
    createVideo,
    updateVideo,
    deleteVideo
};

