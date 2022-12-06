const videosControllers = require("./videos.controllers")

const getAllVideos = (req, res) => {
  videosControllers.getAllVideos()
      .then(data => {
          res.status(200).json(data)
      })
      .catch(err => {
          res.status(400).json({message: err.message})
      })
}

const getVideoById = (req,res) => { 
    const id = req.params.id;
    videosControllers
        .getVideoById(id)
        .then(data => {
          if(data){
              res.status(200).json(data)
          }else {
              res.status(404).json({message: 'Invalid ID', id})
          }
      })
         .catch((err) => { 
            res.status(404).json({message:err.message});
          });
 };

 const registerVideo = (req,res) => {
    const {
        title,
        url,
        number
    } = req.body;

    if (title && url && number){
        videosControllers
            .createVideo({
                title,
                url,
                number
            })
            .then((data) => {
              res.status(201).json(data);
            })
            .catch((err) => {
              res.status(400).json(err.message);
            })
    }else{
        res.status(400).json({
            message: "All field must be completed",
            fields: {
                title: 'string',
                url: 'string',
                number: 'int',
                course: 'id-course *optional*'
            }
        })
    }
 };

 const patchVideo = (req, res) => {
    const id = req.params.id;
    const { title, url, number} = req.body;
  
    videosControllers
      .updateVideo(id, { title, url, number })
      .then((data) => {
        if (data[0]) {
          res
            .status(200)
            .json({ message: `Video with ID: ${id}, edited succesfully!` });
        } else {
          res.status(404).json({ message: "Invalid ID" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };

  const deleteVideo = (req, res) => {
    const id = req.params.id;
    videosControllers.deleteVideo(id)
      .then((data) => {
        if (data) {
          res.status(204).json();
        } else {
          res.status(404).json({ message: "Invalid ID" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };

  const getVideosByCourseId = (req, res) => {
    const id = req.course.id; //? req.user contiene la informacion del token desencriptado
  
    usersControllers
      .getVideosByCourseId(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };



  module.exports = {
    getVideoById,
    registerVideo,
    patchVideo,
    deleteVideo,
    getAllVideos,
    getVideosByCourseId
  };
  