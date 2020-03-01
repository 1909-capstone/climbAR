import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/thunks/UserThunks';
import { Link } from 'react-router-dom';
import RouteTile from './RouteTile';

class Profile extends React.Component {
  constructor() {
    super();
    this.bestRoute = this.bestRoute.bind(this);
    this.userRoutes = this.userRoutes.bind(this);
    this.mapCompletedRoutes = this.mapCompletedRoutes.bind(this);
  }
  gradeNumber(grade) {
    return Number(grade.replace(/V/, ''));
  }
  bestRoute() {
    const {
      props: { user },
      gradeNumber,
      mapCompletedRoutes
    } = this;
    console.log('user ', user);
    if (!user.completedRoutes) return;
    return user.completedRoutes.length === 0 ? (
      <div>
        You haven't completed any routes yet.{' '}
        <Link to="/climbingroutes">View Some Routes</Link> and start climbing!
      </div>
    ) : (
      <div>
        Highest Route Completed:
        {user.completedRouteInfo
          ? mapCompletedRoutes().reduce((best, route) => {
              console.log(route);
              return gradeNumber(route.thisRoute.grade) > gradeNumber(best)
                ? route.grade
                : best;
            }, 'VB')
          : 'None completed'}
      </div>
    );
  }
  userRoutes() {
    const { user } = this.props;
    console.log('MAP ', this.mapCompletedRoutes());
    if (!user.completedRouteInfo || !this) return;
    return this.mapCompletedRoutes().length === 0 ? null : (
      <div>
        <div>Your Completed Routes</div>
        {this.mapCompletedRoutes().map(_r => (
          <RouteTile key={_r.id} route={_r.thisRoute} user={user} />
        ))}
      </div>
    );
  }
  mapCompletedRoutes() {
    const { user } = this.props;
    if (!user.completedRouteInfo) return;
    return user.completedRoutes.reduce((allRoutes, route) => {
      const thisRoute = user.completedRouteInfo.filter(
        _r => _r.id === route.climbingRouteId
      )[0];
      allRoutes.push({ ...route, thisRoute });
      return allRoutes;
    }, []);
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>{this.bestRoute()}</div>
        <div>{this.userRoutes()}</div>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = dispatch => {
  return {
    logoutUser: userId => dispatch(logoutUser(userId))
  };
};
export default connect(mapState, mapDispatch)(Profile);
