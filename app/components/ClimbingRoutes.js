import React from 'react';
import style from '../css/holds.css';
import Hold from './Hold';
import { connect } from 'react-redux';
import { fetchClimbingRoutes } from '../redux/thunks/climbingRoutesThunks';
import { climbingRoutes } from '../redux/reducers';
import { Nav } from 'react-bootstrap';

class ClimbingRoutes extends React.Component {
  componentDidMount() {
    this.props.fetchClimbingRoutes();
  }
  render() {
    const { climbingRoutes } = this.props;
    return (
      <main>
        <div> All Climbing Routes </div>
        {climbingRoutes.map(climbingRoute => (
          <Nav.Link
            key={climbingRoute.id}
            href={`/climbingroutes/${climbingRoute.id}`}
          >
            {climbingRoute.id}
          </Nav.Link>
        ))}
      </main>
    );
  }
}

const mapState = ({ climbingRoutes }) => ({ climbingRoutes });

const mapDispatch = dispatch => {
  return {
    fetchClimbingRoutes: () => dispatch(fetchClimbingRoutes())
  };
};

export default connect(mapState, mapDispatch)(ClimbingRoutes);
