import React from 'react';
import style from '../css/holds.css';
import { ItemTypes } from '../draggable';
import { useDrag } from 'react-dnd';

const Hold = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.HOLD },
    collect: monitor => {
      return {
        isDragging: !!monitor.isDragging()
      };
    }
  });
  return (
    <div
      className="hold"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    ></div>
  );
};

export default Hold;
