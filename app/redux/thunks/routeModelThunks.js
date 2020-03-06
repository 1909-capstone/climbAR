import {
  setHold,
  setRouteModels,
  statusMessage,
  setDraggingHold
} from '../actions.js';
import axios from 'axios';
import { FAIL, SUCCESS } from './utils';

export function setNewHold(hold) {
  return dispatch => dispatch(setHold(hold));
}

export function setNewDraggingHold(hold) {
  return dispatch => dispatch(setDraggingHold(hold));
}

export function createRouteModel(model) {
  return dispatch => {
    return axios
      .post(`/api/routemodels/new`, model)
      .then(() => {
        dispatch(fetchRouteModels());
      })
      .then(() => {
        dispatch(
          statusMessage({
            status: SUCCESS,
            text: 'Route Created'
          })
        );
      })
      .catch(e => {
        console.error(e);
        dispatch(
          statusMessage({
            status: FAIL,
            text: 'Cannot create route '
          })
        );
      });
  };
}

export function fetchRouteModels() {
  return dispatch => {
    return axios
      .get(`api/routemodels`)
      .then(res => {
        dispatch(setRouteModels(res.data));
      })
      .catch(e => {});
  };
}
