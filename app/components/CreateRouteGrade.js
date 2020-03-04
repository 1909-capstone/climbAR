import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateRouteGrade extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h2> Enter Difficulty Level of Climbing Route</h2>
        <div>
          <Form.Group>
            <Form.Label htmlFor="grade">Grade</Form.Label>
            <Form.Control
              as="select"
              id="grade"
              name="grade"
              type="select"
              onChange={handleChange}
            >
              <option value=""> {values.grade}</option>
              <option value="VB">VB</option>
              <option value="V1">V1</option>
              <option value="V2">V2</option>
              <option value="V3">V3</option>
              <option value="V4">V4</option>
              <option value="V5">V5</option>
              <option value="V6">V6</option>
              <option value="V7">V7</option>
              <option value="V8">V8</option>
              <option value="V9">V9</option>
              <option value="V10">V10</option>
              <option value="V11">V11</option>
              <option value="V12">V12</option>
              <option value="V13">V13</option>
              <option value="V14">V14</option>
              <option value="V15">V15</option>
              <option value="V16">V16</option>
            </Form.Control>
          </Form.Group>
        </div>
        <Button label="previous" onClick={this.previous}>Previous</Button>
        <Button label="continue" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

export default CreateRouteGrade;
