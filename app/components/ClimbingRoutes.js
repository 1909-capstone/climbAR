import React from 'react';
import style from '../css/climbingRoutes.css';
import { connect } from 'react-redux';
import { fetchClimbingRoutes } from '../redux/thunks/climbingRoutesThunks';
import RouteTile from './RouteTile';

class ClimbingRoutes extends React.Component {
  componentDidMount() {
    this.props.fetchClimbingRoutes();
  }
  render() {
    const { climbingRoutes } = this.props;
    return (
      <main>
        <div> All Climbing Routes </div>
        <div className="allRoutes">
          {climbingRoutes.map(climbingRoute => (
            <RouteTile key={climbingRoute.id} route={climbingRoute} />
          ))}
        </div>
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
