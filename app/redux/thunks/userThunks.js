import axios from 'axios';
import { setUser, statusMessage } from '../actions';
import { FAIL, SUCCESS } from './utils';

export const logInUser = ({ email, password }) => {
  return function thunk(dispatch) {
    return axios
      .post(`/api/users/login`, { email, password })
      .then(res => {
        console.log('user is updated');
        dispatch(setUser(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//Thunk for creating a user
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
