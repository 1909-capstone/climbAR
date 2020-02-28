import React from 'react';
import style from '../css/routeTile.css';
import { Link } from 'react-router-dom';

const RouteTile = ({ route }) => {
  return (
    <div className="routeTile">
      <div>{route.grade}</div>
      <div>{route.rating}</div>
      <Link key={route.id} to={`/climbingroutes/${route.id}`}>
        {route.id}
      </Link>
    </div>
  );
};

export default RouteTile;
