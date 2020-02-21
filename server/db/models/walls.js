const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING } = Sequelize;

const Wall = db.define('wall', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING
  },
});

module.exports = Wall;
