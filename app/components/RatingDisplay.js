import React from 'react';

const RatingDisplay = ({ avgRating }) => {
  console.log('average', avgRating);
  return (
    <div
      style={{
        width: '3em',
        height: '1em',
        border: '1px solid',
        background: 'linear-gradient(0.25turn, green, yellow, red',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div
        style={{
          postion: 'absolute',
          height: '100%',
          backgroundColor: 'white',
          width: `${100 - (avgRating / 10) * 100}%`
        }}
      ></div>
    </div>
  );
};

export default RatingDisplay;
