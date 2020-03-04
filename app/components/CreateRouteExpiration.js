import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { htmlDate } from '../utils';

class CreateRouteExpiration extends Component {
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
          <Form.Group>
            <Form.Group>
              <Form.Label htmlFor="endDate">
                Enter the Expiration Date for the Climbing Route
              </Form.Label>
              <Form.Control
                id="endDate"
                name="endDate"
                type="date"
                defaultValue={values.endDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Group>
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

export default CreateRouteExpiration;
