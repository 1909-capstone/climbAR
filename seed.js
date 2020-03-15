const { users, holds, climbingRoutes } = require('./seed-data.js');
const { routeModels } = require('./models-converted.js');
const {
  User,
  Hold,
  ClimbingRoute,
  RouteModel,
  CompletedRoute
} = require('./server/db/models/index.js');

const completeDateCalculator = grade => {
  const now = new Date();
  const gradeNumber = Number(grade.slice(1));
  const gradeDate = days(gradeNumber);
  const twentyDaysAgo = new Date().getTime() - days(20);
  return new Date(twentyDaysAgo + gradeDate);
};

const days = numDays => 1000 * 60 * 60 * 24 * numDays;

const seed = async () => {
  const newusers = await Promise.all(users.map(user => User.create(user)));
  const newHolds = await Promise.all(holds.map(hold => Hold.create(hold)));
  let newRoutes = await Promise.all(
    climbingRoutes.map(climbingRoute => ClimbingRoute.create(climbingRoute))
  );
  newRoutes = newRoutes.sort((a, b) => {
    if (Number(a.grade[1]) > Number(b.grade[1])) return 1;
    if (Number(a.grade[1]) < Number(b.grade[1])) return -1;
    return 0;
  });
  //climbingRoute Id is found by matching grade and color
  //hold Id is found by matching hold type
  let currentClimbingRoute = 0;
  let currentGrade = 'V0';
  await Promise.all(
    routeModels.map((_r, i) => {
      if (_r.routeGrade !== currentGrade) {
        currentGrade = _r.routeGrade;
        currentClimbingRoute++;
      }
      const holdId = newHolds.filter(hold => {
        return hold.holdType === _r.holdType;
      })[0].id;
      const climbingRouteId = newRoutes[currentClimbingRoute].id;
      let newR = {};
      Object.keys(_r).forEach(key => {
        if (key !== 'holdType' && key !== 'routeGrade') {
          newR[key] = _r[key];
        }
      });
      return RouteModel.create({
        ...newR,
        climbingRouteId,
        holdId
      });
    })
  );

  newusers.forEach(async _u => {
    await Promise.all(
      newRoutes.map(_r =>
        CompletedRoute.create({
          userId: _u.id,
          climbingRouteId: _r.id,
          completeDate: completeDateCalculator(_r.grade)
        })
      )
    );
  });
};

module.exports = seed;
