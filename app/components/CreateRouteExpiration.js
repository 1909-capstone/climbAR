import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { htmlDate } from '../utils';
import { connect } from 'react-redux';

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
    const { routeModel, handleChange, values } = this.props;
    let today = new Date();
    let endDate = new Date(values.endDate);

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
                defaultValue={routeModel.endDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Group>
        </div>
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
            disabled={isNaN(endDate) || endDate < today}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

const mapState = ({ routeModel }) => ({ routeModel });

export default connect(mapState, null)(CreateRouteExpiration);
