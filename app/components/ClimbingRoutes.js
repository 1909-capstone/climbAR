import React from 'react';
import style from '../css/climbingRoutes.css';
import { connect } from 'react-redux';
import { fetchClimbingRoutes } from '../redux/thunks/climbingRoutesThunks';
import RouteTile from './RouteTile';
import RouteFilters from './RouteFilters';

class ClimbingRoutes extends React.Component {
  constructor() {
    super();
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    this.props.fetchClimbingRoutes();
  }
  filter(route) {
    const { routeFilters, user } = this.props;
    for (let filter in routeFilters) {
      if (
        filter === 'grade' &&
        routeFilters.grade &&
        route.grade !== routeFilters.grade
      )
        return false;
      if (
        filter === 'completed' &&
        routeFilters.completed &&
        !user.completedRoutes.filter(_r => _r.climbingRouteId === route.id)[0]
      )
        return false;
      if (
        filter === 'liked' &&
        routeFilters.liked &&
        !user.likedRoutes.filter(_r => _r.climbingRouteId === route.id)[0]
      )
        return false;
    }
    return true;
  }
  render() {
    const {
      props: { climbingRoutes, user },
      filter
    } = this;
    return (
      <main>
        <div> All Climbing Routes </div>
        <RouteFilters />
        <div className="allRoutes">
          {climbingRoutes.map(climbingRoute => {
            return filter(climbingRoute) ? (
              <RouteTile
                key={climbingRoute.id}
                route={climbingRoute}
                user={user}
              />
            ) : (
              ''
            );
          })}
        </div>
      </main>
    );
  }
}

const mapState = ({ climbingRoutes, user, routeFilters }) => ({
  climbingRoutes,
  user,
  routeFilters
});

const mapDispatch = dispatch => {
  return {
    fetchClimbingRoutes: () => dispatch(fetchClimbingRoutes())
  };
};

export default connect(mapState, mapDispatch)(ClimbingRoutes);
