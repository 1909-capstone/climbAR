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
    areaHeight: 5,
    areaWidth: 2,
    status: 'installed',
    endDate: moment('2020-04-01')
  },
  {
    grade: 'V4',
    holdColor: 'purple',
    areaHeight: 5,
    areaWidth: 2,
    status: 'installed',
    endDate: moment('2020-04-01')
  },
  {
    grade: 'V3',
    holdColor: 'black',
    areaHeight: 5,
    areaWidth: 2,
    status: 'pending',
    endDate: moment('2020-07-01')
  },
  {
    grade: 'V5',
    holdColor: 'green',
    areaHeight: 5,
    areaWidth: 2,
    status: 'expired',
    endDate: moment('2020-02-01')
  }
];

const routeModels = [
  { coordinateX: 1, coordinateY: 1, isStart: false, isFinish: false },
  { coordinateX: 3, coordinateY: 3, isStart: false, isFinish: false },
  { coordinateX: 5, coordinateY: 5, isStart: false, isFinish: false }
];

module.exports = {
  users,
  holds,
  climbingRoutes,
  routeModels
};
