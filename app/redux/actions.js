import {
  SET_HOLD,
  SET_HOLDS,
  SET_ROUTE_MODELS,
  SET_ROUTE_MODEL
} from './constants';

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

export const setRouteModel = model => {
  return {
    type: SET_ROUTE_MODEL,
    model
  };
};

export const setRouteModels = models => {
  return {
    type: SET_ROUTE_MODELS,
    models
  };
};
