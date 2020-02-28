const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING } = Sequelize;

const Video = db.define('video', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  url: {
    type: STRING,
    defaultValue: 'No beta'
  }
});

module.exports = Video;
