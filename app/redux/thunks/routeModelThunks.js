import { setHold, setRouteModels , statusMessage } from '../actions.js';
import axios from 'axios';
import { FAIL, SUCCESS } from './utils';

export function setNewHold(hold) {
  return dispatch => dispatch(setHold(hold));
}

export function createRouteModel(model) {
  return dispatch => {
    console.log('CREATING ROUTE MODEL');
    console.log(model);
    return axios
      .post(`/api/routemodels/new`, model)
      .then(() => {
        dispatch(fetchRouteModels());
      }).then(() => {
        dispatch(
          statusMessage({
            status: SUCCESS,
            text: 'Route Created'
          })
        );
      })
      .catch(e => {
        console.error(e);
        dispatch(statusMessage({
          status: FAIL,
          text: 'Cannot create route '
        }))        
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
