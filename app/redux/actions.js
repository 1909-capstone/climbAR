import { SET_HOLD } from './constants';

export const setHold = hold => {
  return {
    type: SET_HOLD,
    hold
  };
};
