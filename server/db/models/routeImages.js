const Sequelize = require('sequelize');
const db = require('../database');

const { UUID, UUIDV4, STRING } = Sequelize;

const RouteImage = db.define('routeImage', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  fileName: {
    type: STRING,
  },
  filePath: {
    type:STRING
  }
});


module.exports = RouteImage;