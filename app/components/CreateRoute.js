import React from 'react';
import Holds from './Holds';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import RouteCanvas from './RouteCanvas';
import style from '../css/createRoute.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createRouteModel } from '../redux/thunks/routeModelThunks';

const CreateRoute = () => {
  return (
    <div>
      <div className="create_route">
        <DndProvider backend={Backend}>
          <Holds />
          <RouteCanvas />
        </DndProvider>
      </div>
      <div className="button_container">
        <Button
          onClick={() => {
            this.props.createRouteModel(this.props.routeModel);
          }}
        >
          SAVE NEW ROUTE
        </Button>
      </div>
    </div>
  );
};

const mapState = ({ routeModel }) => ({ routeModel });
const mapDispatch = dispatch => {
  return {
    createRouteModel: model => dispatch(createRouteModel(model))
  };
};
export default connect(mapState)(CreateRoute);
