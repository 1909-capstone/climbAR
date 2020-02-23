import { combineReducers } from 'redux';

import { holds, routeModel } from './reducers';

export default combineReducers({
  holds,
  routeModel,
  user,
  statusMessage
});
