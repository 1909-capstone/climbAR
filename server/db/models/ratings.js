const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING } = Sequelize;

const Rating = db.define('rating', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  content: {
    type: STRING,
    validate: {
        isIn:[['Easy','Just right', 'Difficult']]
    }
  },
});

module.exports = Rating;
