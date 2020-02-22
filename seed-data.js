const bcrypt = require('bcrypt');
const moment = require('moment');

const users = [
  {
    userType: 'Admin',
    email: 'cissy5120@gmail.com',
    password: bcrypt.hashSync('123', 10)
  },
  {
    userType: 'Admin',
    email: 'nries1@gmail.com',
    password: bcrypt.hashSync('123', 10)
  },
  {
    userType: 'Admin',
    email: 'raymond.ng47@gmail.com',
    password: bcrypt.hashSync('123', 10)
  },
  {
    userType: 'Climber',
    email: 'climber@gmail.com',
    password: bcrypt.hashSync('123', 10)
  }
];

const holds = [
  {
    holdType: 'footHold'
  },
  {
    holdType: 'pocket'
  },
  {
    holdType: 'jug'
  },
  {
    holdType: 'sloper'
  },
  {
    holdType: 'pinch'
  },
  {
    holdType: 'crimper'
  }
];

const climbingRoutes = [
  {
    grade: 'V1',
    holdColor: 'white',
    areaHeight: 3,
    areaWidth: 0.5,
    status: 'installed',
    endDate: moment('2020-04-01')
  },
  {
    grade: 'V4',
    holdColor: 'purple',
    areaHeight: 3,
    areaWidth: 1.5,
    status: 'installed',
    endDate: moment('2020-04-01')
  },
  {
    grade: 'V3',
    holdColor: 'black',
    areaHeight: 3,
    areaWidth: 2,
    status: 'pending',
    endDate: moment('2020-07-01')
  },
  {
    grade: 'V5',
    holdColor: 'green',
    areaHeight: 2,
    areaWidth: 3,
    status: 'expired',
    endDate: moment('2020-02-01')
  }
];

module.exports = {
  users,
  holds,
  climbingRoutes
};
