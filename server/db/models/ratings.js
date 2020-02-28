const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING, INTEGER } = Sequelize;

const Rating = db.define('rating', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  content: {
    type: INTEGER
  }
});

module.exports = Rating;
