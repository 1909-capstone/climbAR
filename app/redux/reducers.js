<<<<<<< HEAD
import { SET_HOLD, SET_USER, STATUS_MESSAGE } from './constants';
=======
import { SET_HOLD, SET_USER } from './constants';
>>>>>>> cf703b2b8da4a3980f18d4cf7eb6e83f69e27833

export const holds = (state = [], action) => {
  switch (action.type) {
    case SET_HOLD:
      const hold = action.hold;
      const filteredState = state.filter(
        _h => _h.x !== hold.x && _h.y !== hold.y
      );
      console.log('new state = ', [...filteredState, hold]);
      return [...filteredState, hold];
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};
<<<<<<< HEAD

export const statusMessage = (state = { status: null, text: '' }, action) => {
  switch (action.type) {
    case STATUS_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
=======
>>>>>>> cf703b2b8da4a3980f18d4cf7eb6e83f69e27833
