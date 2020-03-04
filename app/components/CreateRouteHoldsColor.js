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
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div>
          <Form.Group></Form.Group>
        </div>
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
