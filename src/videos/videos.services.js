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
        url
    } = req.body;

    if (title && url){
        videosControllers
            .createVideo({
                title,
                url
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
                url: 'string'
            }
        })
    }
 };

 const patchVideo = (req, res) => {
    const id = req.params.id;
    const { title, url} = req.body;
  
    videosControllers
      .updateVideo(id, { title, url })
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

  module.exports = {
    getVideoById,
    registerVideo,
    patchVideo,
    deleteVideo,
    getAllVideos
  };
  