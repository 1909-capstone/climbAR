import { setClimbingRoutes } from '../actions';
import axios from 'axios';

export const fetchClimbingRoutes = () => {
  return dispatch => {
    return axios
      .get(`/api/climbingroutes`)
      .then(res => {
        dispatch(setClimbingRoutes(res.data));
      })
      .catch(e => console.error(e));
  };
};

export const fetchSingleClimbingRoute = id => {
	return dispatch => {
		axios
			.get(`/api/climbingroutes/${id}`)
			.then(res => dispatch(setClimbingRoutes(res.data)))
			.catch(e =>
				console.error(e)
			);
	};
};