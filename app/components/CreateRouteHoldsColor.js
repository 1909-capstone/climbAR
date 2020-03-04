import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateRouteHoldsColor extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  changeHoldColor(color) {
    [...document.querySelectorAll('.hold')].forEach(h => {
      h.style.backgroundColor = color;
    });
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="holdColor">Please select the hold color</Form.Label>
          <Form.Control
            as="select"
            id="holdColor"
            name="holdColor"
            type="select"
            onChange={e => {
              handleChange
              this.changeHoldColor(e.target.value);
            }}
          >
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Purple">Purple</option>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="White">White</option>
            <option value="Tan">Tan</option>
          </Form.Control>
        </Form.Group>
        <Button label="previous" onClick={this.previous}>
          Previous
        </Button>
        <Button label="continue" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

export default CreateRouteHoldsColor;
