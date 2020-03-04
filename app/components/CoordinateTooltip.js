import React from 'react';
import style from '../css/routeCanvas.css';

const CoordinateTooltip = ({ left, top, display, x, y }) => {
  return (
    <div>
      {display && (
        <div
          className="coordinate-tooltip"
          style={{ left: `${left}px`, top: `${top + 50}px` }}
        >{`${x}, ${y}`}</div>
      )}
    </div>
  );
};

export default CoordinateTooltip;
