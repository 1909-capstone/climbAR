import React from 'react';
import style from '../css/routeTile.css';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import CompleteButton from './CompleteButton';

const RouteTile = ({ route }) => {
  return (
    <div className="routeTile">
      <div>{route.grade}</div>
      <div>{route.rating}</div>
      <div>Likes: {route.likedRoutes.length}</div>
      <div>Completed: {route.completedRoutes.length}</div>
      <LikeButton route={route} />
      <CompleteButton route={route} />
      <Link key={route.id} to={`/climbingroutes/${route.id}`}>
        {route.id}
      </Link>
    </div>
  );
};

export default RouteTile;
