import React from 'react';
import style from '../css/holds.css';
import { ItemTypes } from '../draggable';
import { useDrag } from 'react-dnd';

const Hold = ({ hold, color }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.HOLD, holdData: hold },
    collect: monitor => {
      return {
        isDragging: !!monitor.isDragging(),
        holdType: hold.holdType
      };
    }
  });
  return (
    <div style={{ display: 'flex' }}>
      <div> {hold.holdType}</div>
      <div
        id={hold.holdType}
        className="hold"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
          backgroundColor: color
        }}
      ></div>
    </div>
  );
};

export default Hold;
