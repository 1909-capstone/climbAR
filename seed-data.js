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
    holdType: 'sloper',
    modelType: 'a-box'
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
    areaHeight: 3,
    areaWidth: 4,
    status: 'installed',
    endDate: moment('2020-05-01'),
    wallLocation: 'middle'
  },
  {
    grade: 'V0',
    holdColor: 'White',
    areaHeight: 3,
    areaWidth: 4,
    status: 'installed',
    endDate: moment('2020-05-01'),
    wallLocation: 'middle'
  },
  {
    grade: 'V2',
    holdColor: 'Green',
    areaHeight: 3,
    areaWidth: 4,
    status: 'pending',
    endDate: moment('2020-07-01'),
    wallLocation: 'left'
  },
  {
    grade: 'V1',
    holdColor: 'Yellow',
    areaHeight: 3,
    areaWidth: 4,
    status: 'expired',
    endDate: moment('2020-03-01'),
    wallLocation: 'left'
  },
  {
    grade: 'V3',
    holdColor: 'Black',
    areaHeight: 3,
    areaWidth: 4,
    status: 'installed',
    endDate: moment('2020-05-01'),
    wallLocation: 'right'
  },
  {
    grade: 'V4',
    holdColor: 'Green',
    areaHeight: 3,
    areaWidth: 4,
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
    holdModelType: 'a-box',
    positionX: 0.5,
    positionY: 2.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#531b93',
    depth: 0.2,
    height: 0.3,
    width: 0.2
  },
  //v4 purple 3
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'sloper',
    holdModelType: 'a-box',
    positionX: 1.5,
    positionY: 2.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#531b93',
    depth: 0.2,
    height: 0.4,
    width: 0.2
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
    modelColor: '#531b93',
    depth: 0.05,
    height: 0.1,
    width: 0.15
  },
  //v4 purple 5
  {
    routeGrade: 'V4',
    holdColor: 'Purple',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 2,
    positionY: 3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#531b93',
    depth: 0.05,
    height: 0.1,
    width: 0.15
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
    rotationZ: 110,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#ededed',
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
    rotationZ: 140,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#ededed',
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
    modelColor: '#ededed',
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
    modelColor: '#ededed',
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
    positionX: 1.4,
    positionY: 2.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -10,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#ededed',
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
    modelColor: '#ededed',
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
    modelColor: '#ededed',
    radius: 0.03
  },
  //v0 white 8
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.2,
    positionY: 0.55,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#ededed',
    radius: 0.03
  },
  //v0 white 9
  {
    routeGrade: 'V0',
    holdColor: 'White',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.6,
    positionY: 1.4,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#ededed',
    radius: 0.03
  },
  //v2 green 1
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.5,
    positionY: 1.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.06,
    thetaLength: 120,
    thetaStart: 90
  },
  //v2 green 2
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.48,
    positionY: 1.45,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.06,
    thetaLength: 120,
    thetaStart: 90
  },
  //v2 green 3
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'pocket',
    holdModelType: 'a-torus',
    positionX: 1,
    positionY: 1.9,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1.8,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.05,
    radiusTubular: 0.009,
    arc: 360
  },
  //v2 green 4
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'pocket',
    holdModelType: 'a-torus',
    positionX: 0.9,
    positionY: 2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1.8,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.05,
    radiusTubular: 0.009,
    arc: 360
  },
  //v2 green 5
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.9,
    positionY: 2.4,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 70,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.6,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.05,
    thetaLength: 120,
    thetaStart: 90
  },
  //v2 green 6
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1.3,
    positionY: 2.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.6,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.08,
    thetaLength: 120,
    thetaStart: 90
  },
  //v2 green 7
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1,
    positionY: 0.5,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.03
  },
  //v2 green 8
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.1,
    positionY: 0.9,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.03
  },
  //v2 green 9
  {
    routeGrade: 'V2',
    holdColor: 'Green',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1,
    positionY: 1.5,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#48ac10',
    radius: 0.03
  },
  //v1 yellow 1
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.4,
    positionY: 1.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.05,
    thetaLength: 120,
    thetaStart: 90
  },
  //v1 yellow 2
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.3,
    positionY: 1.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -10,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.05,
    thetaLength: 120,
    thetaStart: 90
  },
  //v1 yellow 3
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'pocket',
    holdModelType: 'a-torus',
    positionX: 0.8,
    positionY: 1.5,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.13,
    radiusTubular: 0.025,
    arc: 360
  },
  //v1 yellow 4
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1.1,
    positionY: 1.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.15,
    thetaLength: 120,
    thetaStart: 90
  },
  //v1 yellow 5
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.8,
    positionY: 2.1,
    positionZ: -0.95,
    rotationX: -20,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.05,
    thetaLength: 360,
    thetaStart: 0
  },
  //v1 yellow 6
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1.4,
    positionY: 2.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.07,
    thetaLength: 120,
    thetaStart: 90
  },
  //v1 yellow 7
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1.1,
    positionY: 2.8,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -10,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.06,
    thetaLength: 120,
    thetaStart: 90
  },
  //v1 yellow 8
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.4,
    positionY: 0.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.03
  },
  //v1 yellow 9
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.4,
    positionY: 0.6,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.03
  },
  //v1 yellow 10
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.9,
    positionY: 0.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.03
  },
  //v1 yellow 11
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.9,
    positionY: 0.5,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.03
  },
  //v1 yellow 12
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.3,
    positionY: 0.9,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.03
  },
  //v1 yellow 13
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1.4,
    positionY: 1.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.03
  },
  //v1 yellow 14
  {
    routeGrade: 'V1',
    holdColor: 'Yellow',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1,
    positionY: 1.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#fffe06',
    radius: 0.03
  },
  //v3 black 1
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.4,
    positionY: 1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -90,
    scaleX: 1,
    scaleY: 1.5,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.2,
    thetaLength: 120,
    thetaStart: 90
  },
  //v3 black 2
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.5,
    positionY: 1.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.04,
    thetaLength: 360,
    thetaStart: 0
  },
  //v3 black 3
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.6,
    positionY: 1.55,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 40,
    scaleX: 2,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.06,
    thetaLength: 360,
    thetaStart: 0
  },
  //v3 black 4
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 0.8,
    positionY: 1.9,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.03,
    thetaLength: 120,
    thetaStart: 90
  },
  //v3 black 5
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1,
    positionY: 2.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 100,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.15,
    thetaLength: 120,
    thetaStart: 90
  },
  //v3 black 6
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'jug',
    holdModelType: 'a-sphere',
    positionX: 1.3,
    positionY: 2.6,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -20,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 0.8,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.06,
    thetaLength: 120,
    thetaStart: 90
  },
  //v3 black 7
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.8,
    positionY: 2.7,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.06,
    thetaLength: 360,
    thetaStart: 0
  },
  //v3 black 8
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.4,
    positionY: 3.1,
    positionZ: -0.95,
    rotationX: -30,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.06,
    thetaLength: 360,
    thetaStart: 0
  },
  //v3 black 9
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.2,
    positionY: 0.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.03
  },
  //v3 black 10
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 0.6,
    positionY: 0.13,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.03
  },
  //v3 black 11
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'footHold',
    holdModelType: 'a-octahedron',
    positionX: 1,
    positionY: 0.5,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1.5,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.03
  },
  //v3 black 12
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'footHold',
    holdModelType: 'a-sphere',
    positionX: 0.4,
    positionY: 0.7,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: -30,
    scaleX: 1,
    scaleY: 0.6,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.08,
    thetaLength: 360,
    thetaStart: 0
  },
  //v3 black 13
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'footHold',
    holdModelType: 'a-sphere',
    positionX: 1.3,
    positionY: 1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.05,
    thetaLength: 360,
    thetaStart: 0
  },
  //v3 black 14
  {
    routeGrade: 'V3',
    holdColor: 'Black',
    holdType: 'footHold',
    holdModelType: 'a-sphere',
    positionX: 1.4,
    positionY: 1.2,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 20,
    scaleX: 1.4,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    modelColor: '#565656',
    radius: 0.05,
    thetaLength: 360,
    thetaStart: 0
  },
  //v4 green 1
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 1.4,
    positionY: 0.5,
    positionZ: -0.95,
    rotationX: 30,
    rotationY: 0,
    rotationZ: -30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.2,
    width: 0.1
  },
  //v4 green 2
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 1.2,
    positionY: 0.6,
    positionZ: -0.95,
    rotationX: 30,
    rotationY: 0,
    rotationZ: -30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.2,
    width: 0.1
  },
  //v4 green 3
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 1,
    positionY: 1,
    positionZ: -0.95,
    rotationX: 35,
    rotationY: 0,
    rotationZ: 30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.2,
    width: 0.1
  },
  //v4 green 4
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 1,
    positionY: 1.3,
    positionZ: -0.95,
    rotationX: 35,
    rotationY: 0,
    rotationZ: 30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.2,
    width: 0.1
  },
  //v4 green 5
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 0.95,
    positionY: 1.5,
    positionZ: -0.95,
    rotationX: 30,
    rotationY: 0,
    rotationZ: 40,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.1,
    width: 0.05
  },
  //v4 green 6
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 0.6,
    positionY: 1.9,
    positionZ: -0.95,
    rotationX: 30,
    rotationY: 0,
    rotationZ: -30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.2,
    width: 0.1
  },
  //v4 green 7
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 1.4,
    positionY: 1.9,
    positionZ: -0.95,
    rotationX: 35,
    rotationY: 0,
    rotationZ: 30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.2,
    width: 0.1
  },
  //v4 green 8
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.5,
    positionY: 2.3,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    radius: 0.08,
    modelColor: '#48ac10',
    thetaLength: 360,
    thetaStart: 0
  },
  //v4 green 9
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 1.3,
    positionY: 2.3,
    positionZ: -0.95,
    rotationX: 35,
    rotationY: 0,
    rotationZ: 30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.1,
    width: 0.05
  },
  //v4 green 10
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'pinch',
    holdModelType: 'a-box',
    positionX: 0.4,
    positionY: 2.6,
    positionZ: -0.95,
    rotationX: 35,
    rotationY: 0,
    rotationZ: -30,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    roughness: 2,
    radius: 0.06,
    modelColor: '#48ac10',
    depth: 0.05,
    height: 0.2,
    width: 0.1
  },
  //v4 green 11
  {
    routeGrade: 'V4',
    holdColor: 'Green',
    holdType: 'sloper',
    holdModelType: 'a-sphere',
    positionX: 0.9,
    positionY: 3.1,
    positionZ: -0.95,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 2,
    roughness: 2,
    radius: 0.08,
    modelColor: '#48ac10',
    thetaLength: 360,
    thetaStart: 0
  }
];

module.exports = {
  users,
  holds,
  climbingRoutes,
  routeModels
};
