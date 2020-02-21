const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING } = Sequelize;

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
      isIn: [['handHold', 'footHold', 'pocket', 'jug', 'sloper']]
    }
  }
});

module.exports = Hold;
