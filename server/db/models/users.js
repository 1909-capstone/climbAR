const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, STRING, DATEONLY } = Sequelize;

const User = db.define('user', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  userType: {
    type: STRING,
    validate: {
      isIn: [['Climber', 'Admin']]
    }
  },
  email: {
    type: STRING,
    unique: true,
    validate: {
      isEmail: {
        arg: true,
        msg: 'Email address must be valid'
      }
    }
  },
  password: {
    type: STRING,
    validate: {
      len: {
        arg: [8, 20]
      }
    }
  },
  startDate: {
    type: DATEONLY
  }
});

module.exports = User;
