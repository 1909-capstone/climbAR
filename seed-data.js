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
    holdType: 'pocket',
    modelType: 'a-torus'
  },
  {
    holdType: 'jug',
    modelType: 'a-sphere'
  },
  {
    holdType: 'sloper',
    modelType: 'a-sphere'
  },
  {
    holdType: 'pinch',
    modelType: 'a-square'
  },
  {
    holdType: 'pinch',
    modelType: 'a-torus'
  },
  {
    holdType: 'plate',
    modelType: 'a-cylinder'
  },
  {
    holdType: 'crimper'
  }
];

const climbingRoutes = [
  {
    grade: 'V1',
    holdColor: 'White',
    areaHeight: 5,
    areaWidth: 2,
    status: 'installed',
    endDate: moment('2020-05-01')
  },
  {
    grade: 'V4',
    holdColor: 'Purple',
    areaHeight: 5,
    areaWidth: 2,
    status: 'installed',
    endDate: moment('2020-05-01')
  },
  {
    grade: 'V3',
    holdColor: 'Yellow',
    areaHeight: 5,
    areaWidth: 2,
    status: 'pending',
    endDate: moment('2020-07-01')
  },
  {
    grade: 'V5',
    holdColor: 'Green',
    areaHeight: 5,
    areaWidth: 2,
    status: 'expired',
    endDate: moment('2020-03-01')
  }
];

const routeModels = [
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.4,
    positionY: 1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.15,
    thetaLength: 120,
    thetaStart: 90
  },
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.9,
    positionY: 1.4,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -10,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.15,
    thetaLength: 120,
    thetaStart: 90
  },
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1.5,
    positionY: 2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.15,
    thetaLength: 120,
    thetaStart: 100
  },
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.9,
    positionY: 2.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.6,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.15,
    thetaLength: 120,
    thetaStart: 110
  },
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.2,
    positionY: 0.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.04
  },
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.6,
    positionY: 0.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.04
  },
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.2,
    positionY: 0.4,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.04
  },
  {
    routeGrade: 'V1',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.6,
    positionY: 0.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#d6d6d6',
    radius: 0.04
  },
  {
    routeGrade: 'V3',
    holdColor: 'Yellow',
    holdType: 'pinch',
    holdModelType: 'a-torus',
    positionX: 0.4,
    positionY: 1.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -90,
    scaleX: 1.3,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.25,
    modelColor: '#7c7a01',
    arc: 180,
    radiusTubular: 0.015
  },
  {
    routeGrade: 'V3',
    holdColor: 'Yellow',
    holdType: 'pocket',
    holdModelType: 'a-torus',
    positionX: 1.2,
    positionY: 1.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1.6,
    roughness: 2,
    modelColor: '#7c7a01',
    radius: 0.05,
    arc: 360,
    radiusTubular: 0.009
  },
  {
    routeGrade: 'V3',
    holdColor: 'Yellow',
    holdType: 'pocket',
    holdModelType: 'a-torus',
    positionX: 0.8,
    positionY: 1.9,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1.6,
    roughness: 2,
    modelColor: '#7c7a01',
    radius: 0.05,
    arc: 360,
    radiusTubular: 0.009
  },
  {
    routeGrade: 'V3',
    holdColor: 'Yellow',
    holdType: 'plate',
    holdModelType: 'a-cylinder',
    positionX: 1.1,
    positionY: 2.3,
    positionZ: -0.95,
    rotationX: -5,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.6,
    roughness: 2,
    modelColor: '#7c7a01',
    radius: 0.2,
    thetaLength: 360,
    thetaStart: 0,
    height: 0.08
  },
  {
    routeGrade: 'V3',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.5,
    positionY: 0.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#7c7a01',
    radius: 0.04
  },
  {
    routeGrade: 'V3',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.5,
    positionY: 0.45,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#7c7a01',
    radius: 0.04
  },
  {
    routeGrade: 'V3',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.4,
    positionY: 0.6,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#7c7a01',
    radius: 0.04
  }
];

module.exports = {
  users,
  holds,
  climbingRoutes,
  routeModels
};
