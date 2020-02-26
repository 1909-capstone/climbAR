import React from 'react';
import style from '../css/holds.css';
import { ItemTypes } from '../draggable';
import { useDrag } from 'react-dnd';

const Hold = ({ hold }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.HOLD, holdData: hold },
    collect: monitor => {
      return {
        isDragging: !!monitor.isDragging()
      };
    }
  });
  return (
    <div style={{display:'flex'}}>
      <div> {hold.holdType}</div>
      <div
        id={hold.holdType}
        className="hold"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move'
        }}
      ></div>
    </div>
  );
};

export default Hold;
