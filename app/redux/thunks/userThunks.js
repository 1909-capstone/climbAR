import axios from 'axios';

import { setUser } from '../actions';

export const fetchUser = sessionId => {
  return function thunk(dispatch) {
    return axios
      .get(`api/users/session/${sessionId}`)
      .then(res => {
        if (typeof res.data === 'string') {
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
      .then(user => {
        dispatch(setUser(user.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
