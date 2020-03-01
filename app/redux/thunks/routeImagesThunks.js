import { setRouteImage, statusMessage } from './../actions';
import { FAIL, SUCCESS } from './utils';
import axios from 'axios';

export const uploadRouteImage = file => {
  return dispatch => {
    console.log('CREATING FILE MODEL');
    return axios
    .post('/api/routeimages', file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res)
      })
      // .then(() => {
      //   dispatch(setRouteImage());
      // })
      .catch(e => {
        console.error(e);
        dispatch(
          statusMessage({
            status: FAIL,
            text: 'Cannot Upload Image'
          })
        );
      });
  };
}
