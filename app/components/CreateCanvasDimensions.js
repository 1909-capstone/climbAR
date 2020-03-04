import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { setRouteModel } from '../redux/actions';

class CreateCanvasDimensions extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { handleChange, values } = this.props;
    return (
      <div>
        <h2> Enter Canvas Dimensions</h2>
        <div>
          <Form.Group>
            <Form.Label htmlFor="height"> Select the Height of the Canvas </Form.Label>
            <Form.Control
              id="height"
              name="areaHeight"
              type="number"
              min="0"
              max="7"
              onChange={handleChange}
              defaultValue={values.areaHeight}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="width"> Select the Width of the Canvas</Form.Label>
            <Form.Control
              id="width"
              name="areaWidth"
              type="number"
              min="0"
              max="3"
              onChange={handleChange}
              defaultValue={values.areaWidth}
            />
          </Form.Group>
        </div>
        <Button label="Continue" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

export default CreateCanvasDimensions;
