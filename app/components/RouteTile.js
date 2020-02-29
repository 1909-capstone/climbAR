import React from 'react';
import style from '../css/routeTile.css';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import CompleteButton from './CompleteButton';
import RatingButon from './RatingButton';
import { average } from '../utils';

const RouteTile = ({ route, user }) => {
  return (
    <div className="routeTile">
      <div>{route.grade}</div>
      <div>{route.rating}</div>
      <div>Likes: {route.likedRoutes.length}</div>
      <div>Completed: {route.completedRoutes.length}</div>
      <div>Avg Difficulty Rating: {average(route.ratings, 'rating')}</div>
      {user.userType && <RatingButon route={route} />}
      {user.userType && <LikeButton route={route} />}
      {user.userType && <CompleteButton route={route} />}
      <Link key={route.id} to={`/climbingroutes/${route.id}`}>
        {route.id}
      </Link>
    </div>
  );
};

export default RouteTile;
