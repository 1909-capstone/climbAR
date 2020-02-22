import { combineReducers } from 'redux';

import { holds, user, statusMessage } from './reducers';

export default combineReducers({
  holds,
  user,
  statusMessage 
});
