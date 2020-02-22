import axios from 'axios';

import { setUser } from '../actions';

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
