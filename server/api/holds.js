const router = require('express').Router();
const { models } = require('../db');
const { Hold } = models;

//finds all the holds
router.get('/', (req, res, next) => {
  Hold.findAll()
    .then(allHolds => res.status(200).send(allHolds))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

module.exports = router;
