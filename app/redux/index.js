import { combineReducers } from 'redux';

import {
  holds,
  routeModel,
  user,
  statusMessage,
  climbingRoutes,
  climbingRoute,
  routeImage
} from './reducers';

export default combineReducers({
  holds,
  routeModel,
  user,
  statusMessage,
  climbingRoutes,
  climbingRoute,
  routeImage
});
