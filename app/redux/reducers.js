import { SET_HOLD } from './constants';

export const holds = (
  state = [
    { id: '1', x: 0, y: 0 },
    { id: '2', x: 5, y: 5 }
  ],
  action
) => {
  switch (action.type) {
    case SET_HOLD:
      const hold = action.hold;
      console.log('new state = ', [...state, hold]);
      return [...state, hold];
    default:
      return state;
  }
};
