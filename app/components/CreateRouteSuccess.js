import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createRouteModel } from '../redux/thunks/routeModelThunks';
import CreateRoute from './CreateRouteForm';
import { Nav, Jumbotron, Container } from 'react-bootstrap';

class CreateRouteSuceess extends Component {
  render() {
    const {climbingRoute } = this.props;
    return (
      <Jumbotron>
        <Container>
          <h1> Thank You for your Submission! </h1>
          <div>
            {' '}
            Please see <a href="/climbingroutes"> all </a>the Climbing Routes!{' '}
          </div>
          <div> Please see the Climbing Route <a href={`/climbingroutes/${climbingRoute.id}`}> you created! </a> </div>
          <div>
            {' '}
            Create another<a href="/admin/create"> Climbing Route! </a>{' '}
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

const mapState = ({ climbingRoute }) => ({ climbingRoute });

export default connect(mapState)(CreateRouteSuceess);
