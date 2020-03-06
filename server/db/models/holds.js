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
    allowNull: false,
    validate: {
      isIn: [['footHold', 'pocket', 'jug', 'sloper', 'pinch', 'crimper']]
    }
  },
  modelType: {
    allowNull: false,
    type: STRING
  }
});

module.exports = Hold;
