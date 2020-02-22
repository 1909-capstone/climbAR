import { SET_HOLD, SET_HOLDS } from './constants';

export const holds = (state = [], action) => {
  switch (action.type) {
    case SET_HOLD:
      const hold = action.hold;
      const filteredState = state.filter(
        _h => _h.x !== hold.x && _h.y !== hold.y
      );
      return [...filteredState, hold];
    case SET_HOLDS:
      return action.holds;
    default:
      return state;
  }
};
