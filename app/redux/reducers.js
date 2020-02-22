import { SET_HOLD, SET_HOLDS, SET_ROUTE_MODEL } from './constants';

export const holds = (state = [], action) => {
  switch (action.type) {
    case SET_HOLDS:
      return action.holds;
    default:
      return state;
  }
};

export const routeModel = (
  state = {
    holds: [],
    grade: '',
    holdColor: '',
    areaHeight: 0,
    areaWidth: 0,
    status: '',
    endData: ''
  },
  action
) => {
  switch (action.type) {
    case SET_ROUTE_MODEL:
      return { ...state, ...action.model };
    case SET_HOLD:
      const hold = action.hold;
      const filteredState = state.holds.filter(
        _h => _h.coordinateX !== hold.x && _h.coordinateY !== hold.y
      );
      return { ...state, holds: [...filteredState, hold] };
    default:
      return state;
  }
};
