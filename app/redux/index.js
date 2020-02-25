import { combineReducers } from 'redux';

<<<<<<< HEAD
import {
  holds,
  routeModel,
  user,
  statusMessage,
  climbingRoutes
} from './reducers';
=======
import { holds, routeModel, user, statusMessage , climbingRoutes, climbingRoute } from './reducers';
>>>>>>> 85bc78f55820e4f414d286184c45fec7ae04331f

export default combineReducers({
  holds,
  routeModel,
  user,
  statusMessage,
  climbingRoutes,
  climbingRoute
});
