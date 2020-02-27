import {
  SET_HOLD,
  SET_HOLDS,
  SET_ROUTE_MODEL,
  SET_USER,
  STATUS_MESSAGE,
  SET_CLIMBING_ROUTES,
  SET_CLIMBING_ROUTE
} from './constants';

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
    sorted_holds: {},
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
      const sorted_holds = state.sorted_holds;
      const xy = `${hold.coordinateX}${hold.coordinateY}`;
      const filteredState = state.holds.filter(
        _h => _h.coordinateX !== hold.x && _h.coordinateY !== hold.y
      );
      if (!sorted_holds[xy]) {
        sorted_holds[xy] = hold;
      }
      return {
        ...state,
        holds: [...filteredState, hold],
        sorted_holds: { ...sorted_holds }
      };
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

export const statusMessage = (state = { status: null, text: '' }, action) => {
  switch (action.type) {
    case STATUS_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export const climbingRoutes = (state = [], action) => {
  switch (action.type) {
    case SET_CLIMBING_ROUTES:
      return action.routes;
    default:
      return state;
  }
};

export const climbingRoute = (state = {}, action) => {
  switch (action.type) {
    case SET_CLIMBING_ROUTE:
      return action.route;
    default:
      return state;
  }
};
