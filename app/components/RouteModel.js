import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';

class SingleClimbingRoute extends React.Component {
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
  }
  render() {
    const { climbingRoute } = this.props;
    console.log( climbingRoute );
    return (
    <div>
      <main>
        <div> Name: {climbingRoute.id}</div>
        <div> Grade: {climbingRoute.grade}</div>
        <div> Hold Color: {climbingRoute.areaHeight}</div> 
        <div> Height {climbingRoute.areaHeight} Width: {climbingRoute.areaWidth}</div>
        <div> End Date: {climbingRoute.endDate}</div>
      </main>
    </div>

    );
  }
}

const mapState = ({ climbingRoute }) => ({ climbingRoute });

const mapDispatch = dispatch => {
  return {
    fetchSingleClimbingRoute: id => dispatch(fetchSingleClimbingRoute(id))
  };
};

export default connect(mapState, mapDispatch)(SingleClimbingRoute);
