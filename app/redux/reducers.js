import {
  SET_HOLD,
  SET_HOLDS,
  SET_DRAGGING_HOLD,
  SET_ROUTE_MODEL,
  SET_USER,
  STATUS_MESSAGE,
  SET_CLIMBING_ROUTES,
  SET_CLIMBING_ROUTE,
  SET_ROUTE_FILTERS,
  SET_ROUTE_IMAGE
} from './constants';
import { htmlDate } from '../utils';
import moment from 'moment';

export const routeFilters = (state = {}, action) => {
  switch (action.type) {
    case SET_ROUTE_FILTERS:
      const newState = { ...state, ...action.filters };
      return newState;
    default:
      return state;
  }
};

export const draggingHold = (state = {}, action) => {
  switch (action.type) {
    case SET_DRAGGING_HOLD:
      return action.hold;
    default:
      return state;
  }
};

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
    draggingHold: {},
    sorted_holds: {},
    grade: '',
    holdColor: '',
    areaHeight: 10,
    areaWidth: 15,
    status: 'installed',
    endData: moment(htmlDate(14))
  },
  action
) => {
  switch (action.type) {
    case SET_ROUTE_MODEL:
      return { ...state, ...action.model };
    case SET_HOLD:
      const hold = action.hold;
      const { sorted_holds, draggingHold } = state;
      const xy = `${hold.coordinateX.toString()}-${hold.coordinateY.toString()}`;
      const filteredHolds = state.holds.filter(
        _h =>
          _h.id !== state.draggingHold.id &&
          _h.coordinateX !== hold.x &&
          _h.coordinateY !== hold.y
      );
      const newDraggingHold = hold.id === draggingHold.id ? {} : draggingHold;
      if (hold.id === draggingHold.id) {
        delete sorted_holds[
          `${draggingHold.coordinateX.toString()}-${draggingHold.coordinateY.toString()}`
        ];
      }
      if (!sorted_holds[xy]) {
        sorted_holds[xy] = hold;
        return {
          ...state,
          holds: [...filteredHolds, hold],
          sorted_holds: { ...sorted_holds },
          newDraggingHold
        };
      }
      return state;
    case SET_DRAGGING_HOLD:
      return { ...state, draggingHold: action.hold };
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

export const routeImage = (state = {}, action) => {
  switch (action.type) {
    case SET_ROUTE_IMAGE:
      return action.image;
    default:
      return state;
  }
};
