const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING, DECIMAL, BOOLEAN } = Sequelize;

//TO DO: define holding surface direction?
const Hold = db.define('hold', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  holdType: {
    type: STRING,
    validate: {
      isIn: [['handHold', 'footHold']]
    }
  },
  color: {
    type: STRING
  },
  coordinateX: {
    type: DECIMAL
  },
  coordinateY: {
    type: DECIMAL
  },
  coordinateZ: {
    type: DECIMAL
  },
  isStart: {
    type: BOOLEAN
  },
  isFinish: {
    type: BOOLEAN
  }
});

module.exports = Hold;
