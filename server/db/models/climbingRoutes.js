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
    allowNull: false,
    type: STRING
  },
  holdColor: {
    allowNull: false,
    type: STRING
  },
  status: {
    type: STRING,
    validate: {
      isIn: [['installed', 'pending', 'expired']]
    }
  },
  endDate: {
    type: DATEONLY
  },
  wallLocation: {
    type: STRING
  }
});

module.exports = ClimbingRoute;
