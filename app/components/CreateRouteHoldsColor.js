import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Hold from './Hold';
import { holdColorDictionary } from '.././utils.js';

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
    const { routeModel, handleChange, values } = this.props;
    const { holdColor } = routeModel;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          paddingTop: '30px'
        }}
      >
        <Form.Group>
          <Form.Label htmlFor="holdColor">
            Please select the hold color
          </Form.Label>
          <Form.Control
            as="select"
            id="holdColor"
            name="holdColor"
            type="select"
            onChange={e => {
              handleChange(e);
              this.changeHoldColor(e.target.value);
            }}
          >
            <option value="">{holdColorDictionary[holdColor]}</option>
            <option value="#a61901">Red</option>
            <option value="#ce7801">Orange</option>
            <option value="#fffe06">Yellow</option>
            <option value="#48ac10">Green</option>
            <option value="#0433ff">Blue</option>
            <option value="#531b93">Purple</option>
            <option value="#565656">Black</option>
            <option value="#ededed">White</option>
          </Form.Control>
        </Form.Group>
        <div>
          <Button
            label="previous"
            onClick={this.previous}
            variant="outline-dark"
            style={{ marginRight: '5px' }}
          >
            Previous
          </Button>
          <Button
            label="continue"
            onClick={this.continue}
            variant="outline-dark"
            style={{ marginLeft: '5px' }}
            disabled={!values.holdColor}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

const mapState = ({ routeModel }) => ({ routeModel });

export default connect(mapState, null)(CreateRouteHoldsColor);
