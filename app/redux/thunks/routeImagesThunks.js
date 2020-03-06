import { setRouteImage, statusMessage } from './../actions';
import { FAIL, SUCCESS } from './utils';
import axios from 'axios';

export const uploadRouteImage = file => {
  return dispatch => {
    return axios
<<<<<<< HEAD
      .post(
        '/api/routeimages',
        file,   
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
=======
      .post('/api/routeimages', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
>>>>>>> a2b18ed1dcd00579937ec51db5079fcf1d243112
      .then(res => {
        dispatch(setRouteImage(res.data));
      })
      .then(() => {
        dispatch(
          statusMessage({
            status: SUCCESS,
            text: 'Image has been uploaded successfully'
          })
        );
      })
      .catch(e => {
        console.error(e);
        dispatch(
          statusMessage({
            status: FAIL,
            text: 'Cannot upload the following image'
          })
        );
      });
  };
};
