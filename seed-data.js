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
    holdType: 'footHold',
    modelType: 'a-octahedron'
  },
  {
    holdType: 'footHold',
    modelType: 'a-sphere'
  },
  {
    holdType: 'sloper',
    modelType: 'a-sphere'
  },
  {
    holdType: 'jug',
    modelType: 'a-sphere'
  },
  {
    holdType: 'pinch',
    modelType: 'a-box'
  },
  {
    holdType: 'pocket',
    modelType: 'a-torus'
  },
  {
    holdType: 'crimper',
    modelType: 'a-square'
  }
];

const climbingRoutes = [
  {
    grade: 'V4',
    holdColor: 'Purple',
    areaHeight: 4,
    areaWidth: 4,
    status: 'installed',
    endDate: moment('2020-05-01'),
    wallLocation: 'middle'
  },
  {
    grade: 'V0',
    holdColor: 'White',
    areaHeight: 5,
    areaWidth: 2,
    status: 'installed',
    endDate: moment('2020-05-01'),
    wallLocation: 'middle'
  },
  {
    grade: 'V2',
    holdColor: 'Green',
    areaHeight: 5,
    areaWidth: 2,
    status: 'pending',
    endDate: moment('2020-07-01'),
    wallLocation: 'left'
  },
  {
    grade: 'V1',
    holdColor: 'Yellow',
    areaHeight: 5,
    areaWidth: 2,
    status: 'expired',
    endDate: moment('2020-03-01'),
    wallLocation: 'left'
  },
  {
    grade: 'V3',
    holdColor: 'Black',
    areaHeight: 5,
    areaWidth: 2,
    status: 'installed',
    endDate: moment('2020-05-01'),
    wallLocation: 'right'
  },
  {
    grade: 'V4',
    holdColor: 'Green',
    areaHeight: 5,
    areaWidth: 2,
    status: 'installed',
    endDate: moment('2020-05-01'),
    wallLocation: 'right'
  }
];

const routeModels = [
  //v4 purple 1
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1,
    positionY: 1.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#531b93',
    radius: 0.25,
    thetaLength: 120,
    thetaStart: 90
  },
  //v4 purple 2
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.5,
    positionY: 2.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 90,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#531b93',
    radius: 0.2,
    thetaLength: 120,
    thetaStart: 90
  },
  //v4 purple 3
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 1.5,
    positionY: 2.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -90,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#531b93',
    radius: 0.3,
    thetaLength: 120,
    thetaStart: 90
  },
  //v4 purple 4
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 2,
    positionY: 2.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.12,
    modelColor: '#531b93',
    depth: 0.05,
    height: 0.1,
    width: 0.1
  },
  //v4 purple 5
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 2,
    positionY: 2.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.12,
    modelColor: '#531b93',
    depth: 0.05,
    height: 0.1,
    width: 0.1
  },
  //v4 purple 6
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.2,
    positionY: 0.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.03,
    modelColor: '#531b93'
  },
  //v4 purple 7
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.8,
    positionY: 0.7,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.03,
    modelColor: '#531b93'
  },
  //v0 white 1
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1,
    positionY: 0.9,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 100,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.15,
    thetaLength: 120,
    thetaStart: 90
  },
  //v0 white 2
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.85,
    positionY: 1.4,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 70,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.12,
    thetaLength: 120,
    thetaStart: 90
  },
  //v0 white 3
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.8,
    positionY: 1.9,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.12,
    thetaLength: 120,
    thetaStart: 90
  },
  //v0 white 4
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1,
    positionY: 2.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 180,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.12,
    thetaLength: 120,
    thetaStart: 90
  },
  //v0 white 5
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1.2,
    positionY: 2.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -10,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.12,
    thetaLength: 120,
    thetaStart: 90
  },
  //v0 white 6
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.85,
    positionY: 0.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.03
  },
  //v0 white 7
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.95,
    positionY: 0.5,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.03
  },
  //v0 white 8
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.5,
    positionY: 0.55,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.03
  },
  //v0 white 9
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.2,
    positionY: 1.4,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.03
  }
];

module.exports = {
  users,
  holds,
  climbingRoutes,
  routeModels
};
