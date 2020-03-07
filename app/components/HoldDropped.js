import React from 'react';
import style from '../css/holds.css';
import { ItemTypes } from '../draggable';
import { useDrag } from 'react-dnd';
import Pinch from './Pinch';

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
  const renderer = () => {
    switch (hold.holdType) {
      case 'pinch':
        return <Pinch ref={drag} id={hold.holdType} color={holdColor} />;
      default:
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
    }
  };
  return renderer();
};

export default HoldDropped;
