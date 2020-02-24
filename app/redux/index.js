import { combineReducers } from 'redux';

import { holds, routeModel, user, statusMessage , climbingRoutes, climbingRoute } from './reducers';

export default combineReducers({
  holds,
  routeModel,
  user,
  statusMessage,
  climbingRoutes,
  climbingRoute
});
