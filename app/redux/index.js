import { combineReducers } from 'redux';

import { holds, user } from './reducers';

export default combineReducers({
  holds,
  user
});
