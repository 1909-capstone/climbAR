import axios from 'axios';

import { setUser } from '../actions';

export const fetchUser = sessionId => {
  return function thunk(dispatch) {
    return axios
      .get(`api/users/session/${sessionId}`)
      .then(res => {
        if (typeof res.data === 'string') {
          console.log('received a string from get sessionId api');
          console.log(res.data);
          return res.data;
        } else {
          dispatch(setUser(res.data));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const logInUser = ({ email, password }) => {
  return function thunk(dispatch) {
    return axios
      .post(`/api/users/login`, { email, password })
      .then(res => {
        dispatch(setUser(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const createUser = user => {
  return dispatch => {
    return axios
      .post(`/api/users`, user)
      .then(res => {
        dispatch(setUser(res.data));
      })
      .then(() => {
        dispatch(
          statusMessage({
            status: SUCCESS,
            text: 'Welcome to climbAR'
          })
        );
      })
      .catch(() => {
        dispatch(
          statusMessage({
            status: FAIL,
            text: 'There was an error signing up!'
          })
        );
      });
  };
};
