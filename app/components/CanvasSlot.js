import React from 'react';
import { ItemTypes } from '../draggable';
import { useDrop } from 'react-dnd';

const CanvasSlot = ({ x, y, width, children }) => {
  const [{ isOver, item }, drop] = useDrop({
    accept: ItemTypes.HOLD,
    drop: monitor =>
      console.log('DROPPED AT ', x, ', ', y, 'MONITOR = ', monitor),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: `${100 / width}%`,
        height: '1em'
      }}
    >
      <div className="canvas_slot"></div>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow'
          }}
        />
      )}
    </div>
  );
};

export default CanvasSlot;
