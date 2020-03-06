const router = require('express').Router();
const { models } = require('../db');
const { Video } = models;
const path = require('path');

router.get('/', (req, res, next) => {
  Video.findAll()
    .then(videos => res.status(200).send(videos))
    .catch(e => {
      console.log('ERROR FETCHING VIDEOS');
      console.log(e);
      res.status(400);
      next(e);
    });
});

//Upload Endpoint
router.post('/', (req, res, next) => {
  if (req.files === null) {
    return res.status(400).send({ msg: 'No File Upload' });
  }
  const file = req.files.file;
  //move that file to this path
  file.mv(
    path.join(
      __dirname,
      '../..',
      '/public',
      `/uploads/${file.name.split(' ').join('-')}`
    ),
    err => {
      if (err) {
        console.log('error saving a file');
        console.error(err);
        return res.status(500).send(err);
      }
      //if no error,add the video name and send the file name and path back to the client
      Video.create({
        fileName: file.name,
        filePath: `/uploads/${file.name}`,
        userId: req.body.userId,
        climbingRouteId: req.body.climbingRouteId
      })
        .then(video => {
          //res.send({ fileName: file.name, filePath: `/uploads/${file.name}` });
          res.status(201).send(video);
        })
        .catch(e => {
          console.log('Error creating video entity');
          console.log(e);
          res.status(400);
          next(e);
        });
    }
  );
});

module.exports = router;
