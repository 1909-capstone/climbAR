import { SET_HOLD, SET_USER } from './constants';

export const setHold = hold => {
  return {
    type: SET_HOLD,
    hold
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    user
  };
};

export const statusMessage = message => {
  return {
    type: STATUS_MESSAGE,
    message
  };
};
