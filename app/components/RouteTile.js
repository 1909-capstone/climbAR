import React from 'react';
import style from '../css/routeTile.css';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import CompleteButton from './CompleteButton';
import RatingButon from './RatingButton';
import RatingDisplay from './RatingDisplay';
import { average } from '../utils';

const RouteTile = ({ route, user }) => {
  const avgRating = average(route.ratings, 'rating');
  const darkColor = route =>
    ['black', 'green', 'purple'].indexOf(route.holdColor) !== -1;
  return (
    <div className="routeTile">
      <div
        className="color-bar"
        style={{
          flexGrow: 1,
          backgroundColor: route.holdColor,
          color: darkColor(route) ? 'white' : 'black',
          fontWeight: '700',
          width: '100%',
          height: '2em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.75em'
        }}
      >
        {route.grade}
      </div>
      <div className="route-metrics">
        <LikeButton route={route} />
        <CompleteButton route={route} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <RatingDisplay avgRating={avgRating} />
          <small>difficulty</small>
        </div>
        {user.userType && <RatingButon route={route} />}
      </div>
      <div>
        <i className="large material-icons">schedule</i> Expiring On{' '}
        {route.endDate}
      </div>
      <Link
        className="btn btn-info btn-sm"
        key={route.id}
        to={`/climbingroutes/${route.id}`}
      >
        More
      </Link>
    </div>
  );
};

export default RouteTile;
