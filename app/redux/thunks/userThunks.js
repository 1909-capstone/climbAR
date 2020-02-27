import axios from 'axios';
import { setUser, statusMessage } from '../actions';
import { FAIL, SUCCESS } from './utils';
import chalk from 'chalk';

export const fetchUser = sessionId => {
  return function thunk(dispatch) {
    return axios
      .get(`api/users/session/${sessionId}`)
      .then(res => {
        console.log(chalk.yellow('got user data'));
        console.log(res.data.dataValues);
        dispatch(setUser(res.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
};

export const logInUser = ({ email, password }) => {
  return function thunk(dispatch) {
    return axios
      .post(`/api/users/login`, { email, password })
      .then(res => {
        console.log(chalk.green('user is updated'));
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
// log out a user
export const logoutUser = userId => {
  return function thunk(dispatch) {
    return axios
      .post(`/api/users/logout/${userId}`)
      .then(res => {
        console.log('user logged out');
        dispatch(setUser(res.data));
      })
      .catch(err => {
        console.log('Error logging user out', err);
      });
  };
};
