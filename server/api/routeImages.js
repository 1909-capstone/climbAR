const router = require('express').Router();
const { models } = require('../db');
const { RouteImage } = models;
const path = require('path');

router.get('/',(req,res,next) => {
  RouteImage.findAll()
  .then((allRouteImages) => res.status(200).send(allRouteImages))
  .catch(e => {
    res.status(404);
    next(e)
  })
})

router.post('/',(req,res,next) => {
  if(req.files === null){
    return res.status(400)
  }
  const file = req.files.file;
  console.log('this is the file', file.name);
  file.mv(path.join(`__dirname/../public/uploads/${file.name}`), err => {
    if(err){
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({fileName:file.name, filePath:`/uploads/${file.name}`})
  })
})
module.exports = router; 