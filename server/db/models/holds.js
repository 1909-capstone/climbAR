const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING } = Sequelize;

const Hold = db.define('hold', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  holdType: {
    type: STRING,
    validate: {
      isIn: [
        ['footHold', 'pocket', 'jug', 'sloper', 'pinch', 'plate', 'crimper']
      ]
    }
  },
  modelType: {
    type: STRING
  }
});

module.exports = Hold;
