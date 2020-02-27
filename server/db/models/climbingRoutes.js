const Sequelize = require('sequelize');
const db = require('../database');

const { UUID, UUIDV4, STRING, DECIMAL, DATEONLY } = Sequelize;

const ClimbingRoute = db.define('climbingRoute', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  grade: {
    type: STRING
  },
  holdColor: {
    type: STRING
  },
  areaHeight: {
    type: DECIMAL
  },
  areaWidth: {
    type: DECIMAL
  },
  status: {
    type: STRING,
    validate: {
      isIn: [['installed', 'pending', 'expired']]
    }
  },
  endDate: {
    type: STRING
  }
});

module.exports = ClimbingRoute;
