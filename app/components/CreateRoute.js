import React, { Fragment } from 'react';
import Holds from './Holds';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import RouteCanvas from './RouteCanvas';
import style from '../css/createRoute.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createRouteModel } from '../redux/thunks/routeModelThunks';
import CreateRouteSuccess from './CreateRouteSuccess'; 
import { editRouteModel } from '../redux/thunks/routeModelThunks';


class CreateRoute extends React.Component {
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleClick = inputData => {
    const { createRouteModel } = this.props;
    createRouteModel(inputData);
    this.props.nextStepDouble();
  };
  render() {

    const { routeModel , climbingRoute } = this.props;
    return (
      <Fragment>
          <div>
            <div className="create_route">
              <DndProvider backend={Backend}>
                <Holds />
                <RouteCanvas />
              </DndProvider>
            </div>
            <div className="button_container">
              <Button onClick={this.previous}> Previous </Button>
              <Button onClick={() => this.handleClick(routeModel)}>
                Save New Route
              </Button>
            </div>
          </div>
      </Fragment>
    const { createRouteModel, routeModel, values, editRouteModel } = this.props;
    return (
      <div>
        <div className="create_route">
          <DndProvider backend={Backend}>
            <Holds />
            <RouteCanvas />
          </DndProvider>
        </div>
        <div className="button_container">
          <Button onClick={this.previous}> Previous </Button>
          <Button
            onClick={() => {
              routeModel.id
                ? editRouteModel(routeModel)
                : createRouteModel(routeModel);
            }}
          >
            {routeModel.id ? `Save Changes` : `Save New Route`}
          </Button>
        </div>
      </div>
    );
  }
}

const mapState = ({ routeModel, climbingRoute }) => ({ routeModel, climbingRoute });
const mapDispatch = dispatch => {
  return {
    createRouteModel: model => dispatch(createRouteModel(model)),
    editRouteModel: model => dispatch(editRouteModel(model))
  };
};

export default connect(mapState, mapDispatch)(CreateRoute);
