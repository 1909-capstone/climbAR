import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createRouteModel } from '../redux/thunks/routeModelThunks';
import CreateRoute from './CreateRouteForm';
import { Nav, Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CreateRouteSuceess extends Component {
  render() {
    const { climbingRoute } = this.props;
    return (
      <Jumbotron style={{ backgroundColor: '#f0eae3' }}>
        <Container>
          <h1> Thank You for your Submission! </h1>
          <div>
            {' '}
            Please see{' '}
            <Link to="/climbingroutes" style={{ color: '#E45720' }}>
              {' '}
              all{' '}
            </Link>
            the Climbing Routes!{' '}
          </div>
          <div>
            {' '}
            Please see the Climbing Route{' '}
            <Link
              to={`/climbingroutes/${climbingRoute.id}`}
              style={{ color: '#E45720' }}
            >
              {' '}
              you created!{' '}
            </Link>{' '}
          </div>
          <div>
            {' '}
            Create another
            <Link to="/admin/create" style={{ color: '#E45720' }}>
              {' '}
              Climbing Route!{' '}
            </Link>{' '}
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

const mapState = ({ climbingRoute }) => ({ climbingRoute });

export default connect(mapState)(CreateRouteSuceess);
