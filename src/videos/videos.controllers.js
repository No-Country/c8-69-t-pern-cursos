const uuid = require('uuid')

const Videos = require('../models/videos.models')

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
        url: data.url
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

module.exports = {
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
    getAllVideos
};

