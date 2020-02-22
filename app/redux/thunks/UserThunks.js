import axios from 'axios';
import { setUser, statusMessage } from '../actions';

//Thunk for creating a user
export const createUser = user => {
  return dispatch => {
    return axios
      .post(`/api/users`, {user})
      .then(res => {
        dispatch(setUser(res.data));
      })
      .catch(() => {
        dispatch(
          statusMessage({
            status: FAIL,
            text: 'There was an error signing you up. Try again later.'
          })
        );
      });
  };
};


