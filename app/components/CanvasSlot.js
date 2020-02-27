import React from 'react';
import { ItemTypes } from '../draggable';
import { useDrop } from 'react-dnd';

const CanvasSlot = ({ x, y, width, holds, setNewHold, holdColor }) => {
  const holdAtThisPosition = holds[`${x.toString()}-${y.toString()}`];
  const [{ isOver, hasHold, holdData }, drop] = useDrop({
    accept: ItemTypes.HOLD,
    drop: monitor => {
      setNewHold({
        ...monitor.holdData,
        coordinateX: x,
        coordinateY: y,
        coordinateZ: -5
      });
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      hasHold: holdAtThisPosition,
      holdData: monitor.getItem()
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
      {hasHold && (
        <div
          className="hold"
          id={holdAtThisPosition.holdType}
          style={{ backgroundColor: holdColor, height: '100%', width: '100%' }}
        ></div>
      )}
    </div>
  );
};

export default CanvasSlot;
