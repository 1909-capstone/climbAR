import React, { Component, Fragment } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { htmlDate } from '../utils';

class CreateRouteOptions extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  uploadContinue = e => {
    e.preventDefault();
    this.props.uploadImageStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <div>Please select on how you want to create your Climbing Route! </div>
        <Button onClick={this.continue} variant="outline-dark" size="lg">
          Create Route Form
        </Button>
        <Button onClick={this.uploadContinue} variant="outline-dark" size="lg">
          Upload Image as Canvas
        </Button>
        <div>
          <Button
            label="previous"
            onClick={this.previous}
            variant="outline-dark"
          >
            Previous
          </Button>
        </div>
      </Form>
    );
  }
}

export default CreateRouteOptions;
