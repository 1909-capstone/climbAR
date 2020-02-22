import { SET_HOLD, SET_HOLDS } from './constants';

export const setHold = hold => {
  return {
    type: SET_HOLD,
    hold
  };
};

export const setHolds = holds => {
  return {
    type: SET_HOLDS,
    holds
  };
};
