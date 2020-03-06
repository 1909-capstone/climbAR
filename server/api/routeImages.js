const router = require('express').Router();
const { models } = require('../db');
const { RouteImage, ClimbingRoute } = models;
const path = require('path');

router.get('/', (req, res, next) => {
  RouteImage.findAll()
    .then(allRouteImages => res.status(200).send(allRouteImages))
    .catch(e => {
      console.log('ERROR FETCHING IMAGES');
      console.log(e);
      res.status(404);
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
      //if no error,add the image name and send the file name and path back to the client
      ClimbingRoute.create({
        status: 'pending'
      })
        .then(_climbingRoute => {
          RouteImage.create({
            fileName: file.name,
            filePath: `/uploads/${file.name}`,
            userId: req.user.id,
            climbingRouteId: _climbingRoute.id
          }).then(() => {
            res
              .status(200)
              .send({ fileName: file.name, filePath: `/uploads/${file.name}` });
          });
        })
        .catch(e => {
          res.status(404);
          next(e);
        });
    }
  );
});

module.exports = router;
