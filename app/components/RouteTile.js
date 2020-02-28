import React from 'react';
import style from '../css/routeTile.css';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton.js';

const RouteTile = ({ route }) => {
  return (
    <div className="routeTile">
      <div>{route.grade}</div>
      <div>{route.rating}</div>
      <LikeButton route={route} />
      <Link key={route.id} to={`/climbingroutes/${route.id}`}>
        {route.id}
      </Link>
    </div>
  );
};

export default RouteTile;
