import { setRouteImage, statusMessage } from './../actions';
import { FAIL, SUCCESS } from './utils';
import axios from 'axios';

export function uploadRouteImage(file) {
  return dispatch => {
    console.log('CREATING FILE MODEL');
    console.log(file);
    return axios
      .post(`/api/routeimages`, { file })
      .then(() => {
        dispatch(setRouteImage());
      })
      .then(() => {
        dispatch(
          statusMessage({
            status: SUCCESS,
            text: 'Image Created'
          })
        );
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
