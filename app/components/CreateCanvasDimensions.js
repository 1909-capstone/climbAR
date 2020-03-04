import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateCanvasDimensions extends Component {
  continue = event => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleInput } = this.props;
    return (
      <div>
        <h2> Enter Canvas Dimensions</h2>
        <div>
          <Form.Group>
            <Form.Label htmlFor="height"> Input Height</Form.Label>
            <Form.Control
              id="height"
              name="areaHeight"
              type="number"
              min="0"
              max="7"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="width"> Input Width</Form.Label>
            <Form.Control
              id="width"
              name="areaWidth"
              type="number"
              min="0"
              max="3"
            />
          </Form.Group>
        </div>
      </div>
    );
  }
}

export default CreateCanvasDimensions;
