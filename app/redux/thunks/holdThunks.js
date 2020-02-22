import { setHold, setHolds } from '../actions.js';
import axios from 'axios';

export function setNewHold(hold) {
  return dispatch => dispatch(setHold(hold));
}

export function fetchHolds() {
  return dispatch => {
    console.log('feching holds');
    return axios
      .get(`/api/holds`)
      .then(res => {
        console.log('HOLDS FROM SERVER = ', res.data);
        dispatch(setHolds(res.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}
