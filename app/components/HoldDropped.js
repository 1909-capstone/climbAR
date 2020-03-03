import React from 'react';
import style from '../css/holds.css';
import { ItemTypes } from '../draggable';
import { useDrag } from 'react-dnd';

const HoldDropped = ({ hold, holdColor, setNewDraggingHold }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.DROPPED_HOLD, holdData: hold },
    collect: monitor => {
      if (!!monitor.isDragging()) {
        setNewDraggingHold(hold);
      }
      return {
        isDragging: !!monitor.isDragging(),
        holdType: hold.holdType
      };
    }
  });
  return (
    <div
      id={hold.holdType}
      className="hold"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        backgroundColor: holdColor,
        height: '100%',
        width: '100%'
      }}
    ></div>
  );
};

export default HoldDropped;
