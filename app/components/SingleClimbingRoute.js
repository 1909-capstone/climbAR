import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';

class SingleClimbingRoute extends React.Component {
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
  }
  render() {
    console.log('this is the props', this.props);
    const { climbingRoutes } = this.props;
    return (
      <main>
        <div> Name: {climbingRoutes.id}</div>
        <div> Grade: {climbingRoutes.grade}</div>
        <div> Hold Color: {climbingRoutes.areaHeight}</div> 
        <div> Height {climbingRoutes.areaHeight} Width: {climbingRoutes.areaWidth}</div>
        <div> End Date: {climbingRoutes.endDate}</div>
      </main>
    );
  }
}

const mapState = ({ climbingRoutes }) => ({ climbingRoutes });

const mapDispatch = dispatch => {
  return {
    fetchSingleClimbingRoute: id => dispatch(fetchSingleClimbingRoute(id))
  };
};

export default connect(mapState, mapDispatch)(SingleClimbingRoute);
