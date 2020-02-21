const Sequelize = require('sequelize');
const db = require('../database');

const { UUID, UUIDV4 } = Sequelize;

const LikedRoute = db.define('likedRoute', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  }
});

module.exports = LikedRoute;
