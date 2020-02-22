import { setHold } from '../actions.js';

export function setNewHold(hold) {
  return dispatch => dispatch(setHold(hold));
}
