import React from 'react';
import Hold from './Hold';
import style from '../css/holds.css';

const Holds = () => {
  return (
    <div className="holds_container">
      {Array.from({ length: 10 }).map((h, i) => (
        <Hold key={`hold-${i}`} className={style.hold} />
      ))}
    </div>
  );
};

export default Holds;
