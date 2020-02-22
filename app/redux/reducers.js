import { SET_HOLD } from './constants';

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
