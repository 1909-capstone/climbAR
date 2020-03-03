import axios from 'axios';
import { setUser, statusMessage } from '../actions';
import { FAIL, SUCCESS } from './utils';
import chalk from 'chalk';
import { getCookie } from '../../utils';
import { fetchClimbingRoutes } from './climbingRoutesThunks';
//rename UserThunks
export const fetchUser = sessionId => {
  return dispatch => {
    return axios
      .get(`/api/users/session/${sessionId}`)
      .then(res => {
        const { user, completedRouteInfo } = res.data;
        user['completedRouteInfo'] = completedRouteInfo;
        dispatch(setUser(user));
      })
      .catch(e => {
        console.error(e);
        dispatch(
          statusMessage({
            status: FAIL,
            text: COMMON_FAIL
          })
        );
      });
  };
};

export const logInUser = ({ email, password }) => {
  return function thunk(dispatch) {
    return axios
      .post(`/api/users/login`, { email, password })
      .then(res => {
        const { user, completedRouteInfo } = res.data;
        user['completedRouteInfo'] = completedRouteInfo;
        dispatch(setUser(user));
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

export const likeRoute = (user, route) => {
  return function thunk(dispatch) {
    return axios
      .post(`/api/users/routes/like`, { user, route })
      .then(res => {
        console.log('route liked');
        dispatch(fetchUser(getCookie()));
        dispatch(fetchClimbingRoutes());
      })
      .catch(err => {
        console.log('Error liking a route ', err);
      });
  };
};

export const unLikeRoute = (user, route) => {
  console.log(user, route);
  return function thunk(dispatch) {
    return axios
      .delete(`/api/users/routes/unlike`, { data: { user, route } })
      .then(() => {
        console.log('route unliked');
        dispatch(fetchUser(getCookie()));
        dispatch(fetchClimbingRoutes());
      })
      .catch(err => {
        console.log('Error unliking a route ', err);
      });
  };
};

export const markComplete = (user, route) => {
  return function thunk(dispatch) {
    return axios
      .post(`/api/users/routes/complete`, { user, route })
      .then(res => {
        console.log('route marked completed');
        dispatch(fetchUser(getCookie()));
        dispatch(fetchClimbingRoutes());
      })
      .catch(err => {
        console.log('Error marking a route complete', err);
      });
  };
};

export const unComplete = (user, route) => {
  return function thunk(dispatch) {
    return axios
      .delete(`/api/users/routes/uncomplete`, { data: { user, route } })
      .then(res => {
        console.log('route marked uncomplete');
        dispatch(fetchUser(getCookie()));
        dispatch(fetchClimbingRoutes());
      })
      .catch(err => {
        console.log('Error marking a route complete', err);
      });
  };
};

export const rate = (user, route, rating) => {
  return function thunk(dispatch) {
    return axios
      .post(`api/users/routes/rate`, { user, route, rating })
      .then(() => {
        dispatch(fetchUser(getCookie()));
        dispatch(fetchClimbingRoutes());
      })
      .catch(err => {
        console.log('Error rating a route ', err);
      });
  };
};
