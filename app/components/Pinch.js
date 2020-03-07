import React from 'react';
import style from '../css/pinch.css';

const Pinch = React.forwardRef((props, ref) => {
  const { color } = props;
  return (
    <div id="pinch-scene" ref={ref}>
      <div id="pinch-container">
        <div
          className="box__face box__face--front"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="box__face box__face--back"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="box__face box__face--right"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="box__face box__face--left"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="box__face box__face--top"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="box__face box__face--bottom"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
});

export default Pinch;
