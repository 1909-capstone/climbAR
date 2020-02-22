import React from 'react';
import Holds from './Holds';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import RouteCanvas from './RouteCanvas';
import style from '../css/createRoute.css';

const CreateRoute = () => {
  return (
    <div className="create_route">
      <DndProvider backend={Backend}>
        <Holds />
        <RouteCanvas />
      </DndProvider>
    </div>
  );
};

export default CreateRoute;
