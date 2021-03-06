import React from 'react';
import { ItemTypes } from '../draggable';
import { useDrop } from 'react-dnd';
import HoldDropped from './HoldDropped';
import CoordinateTooltip from './CoordinateTooltip';
import Pinch from './Pinch';

const CanvasSlot = ({
  x,
  y,
  width,
  height,
  holds,
  setNewHold,
  holdColor,
  setNewDraggingHold
}) => {
  const holdAtThisPosition = holds[`${x.toString()}-${y.toString()}`];
  const [{ isOver, hasHold, holdData }, drop] = useDrop({
    accept: [ItemTypes.HOLD, ItemTypes.DROPPED_HOLD],
    drop: monitor => {
      setNewHold({
        ...monitor.holdData,
        coordinateX: x,
        coordinateY: y,
        coordinateZ: -0.95
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
        height: `${100 / height}%`
      }}
      x={x}
      y={y}
    >
      <div className="canvas_slot" style={{ opacity: 0 }}></div>
      {isOver && (
        <div>
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
          <CoordinateTooltip left={0} top={-80} display={true} x={x} y={y} />
        </div>
      )}
      {holdAtThisPosition && (
        <HoldDropped
          hold={holdAtThisPosition}
          holdColor={holdColor}
          className="hold"
          setNewDraggingHold={setNewDraggingHold}
        ></HoldDropped>
      )}
    </div>
  );
};

export default CanvasSlot;
