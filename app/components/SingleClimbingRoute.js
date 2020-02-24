import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';
import { Link } from 'react-router-dom'

class SingleClimbingRoute extends React.Component {
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
  }
  render() {
    const { climbingRoute } = this.props;
    return (
      <main>
        <div> Name: {climbingRoute.id}</div>
        <div> Grade: {climbingRoute.grade}</div>
        <div> Hold Color: {climbingRoute.areaHeight}</div> 
        <div> Height {climbingRoute.areaHeight} Width: {climbingRoute.areaWidth}</div>
        <div> End Date: {climbingRoute.endDate}</div>
        <Link to={`/model/${climbingRoute.id}`}>View Model</Link>
      </main>
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
