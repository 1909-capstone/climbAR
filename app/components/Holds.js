import React from 'react';
import style from '../css/holds.css';
import Hold from './Hold';

const Holds = () => {
  return (
    <div>
      <div>Holds</div>
      <div className="holds_container">
        {Array.from({ length: 10 }).map((h, i) => (
          <Hold key={`hold-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Holds;
