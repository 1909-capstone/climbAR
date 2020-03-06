import { statusMessage } from './../actions';
import { fetchSingleClimbingRoute } from './climbingRoutesThunks';
import { FAIL, SUCCESS } from './utils';
import axios from 'axios';

export const uploadRouteVideo = videoData => {
  return dispatch => {
    return axios
      .post('/api/routevideos', videoData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        dispatch(fetchSingleClimbingRoute(res.data.climbingRouteId));
      })
      .then(() => {
        dispatch(
          statusMessage({
            status: SUCCESS,
            text: 'Video has been uploaded successfully'
          })
        );
      })
      .catch(e => {
        console.error(e);
        dispatch(
          statusMessage({
            status: FAIL,
            text: 'Cannot upload video'
          })
        );
      });
  };
};
