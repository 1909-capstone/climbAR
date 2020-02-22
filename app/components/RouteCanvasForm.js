import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { setRouteModel } from '../redux/actions';

class RouteCanvasForm extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      areaHeight: 15,
      areaWidth: 10
    };
  }
  handleInput(e) {
    console.log(e.target.name, ' = ', e.target.value);
    this.props.setRouteModel({ [e.target.name]: e.target.value });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="height">Height</Form.Label>
          <Form.Control
            id="height"
            name="areaHeight"
            type="number"
            min="0"
            max="7"
            value={
              Number(this.props.routeModel.areaHeight) || this.state.areaHeight
            }
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="width">Width</Form.Label>
          <Form.Control
            id="width"
            name="areaWidth"
            type="number"
            min="0"
            max="3"
            value={
              Number(this.props.routeModel.areaWidth) || this.state.areaWidth
            }
            onChange={this.handleInput}
          />
        </Form.Group>
      </div>
    );
  }
}

const mapState = ({ routeModel }) => ({ routeModel });
const mapDispatch = dispatch => {
  return {
    setRouteModel: model => dispatch(setRouteModel(model))
  };
};

export default connect(mapState, mapDispatch)(RouteCanvasForm);
