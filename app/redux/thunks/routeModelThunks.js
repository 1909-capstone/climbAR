import { setHold, setRouteModels } from '../actions.js';
import axios from 'axios';

export function setNewHold(hold) {
  return dispatch => dispatch(setHold(hold));
}

export function createRouteModel(model) {
  return dispatch => {
    return axios
      .post(`/api/routemodels/new`, model)
      .then(() => {
        dispatch(fetchRouteModels());
      })
      .catch(e => {
        console.error(e);
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
      .catch(e => {
        console.log('error fetching route models ', e);
      });
  };
}
