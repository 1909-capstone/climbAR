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
      },
      onUploadProgress: progressEvent => {

      }
    })
      .then((res) => {
        dispatch(setRouteImage(res.data));
      })
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
