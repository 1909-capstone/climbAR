import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/thunks/UserThunks';
import { Link, Redirect } from 'react-router-dom';
import RouteTile from './RouteTile';

class Profile extends React.Component {
  constructor() {
    super();
    this.bestRoute = this.bestRoute.bind(this);
    this.userRoutes = this.userRoutes.bind(this);
    this.mapCompletedRoutes = this.mapCompletedRoutes.bind(this);
  }
  gradeNumber(grade) {
    return grade === 'VB' ? 0 : Number(grade.replace(/V/, ''));
  }
  bestRoute() {
    const {
      props: { user },
      gradeNumber,
      mapCompletedRoutes
    } = this;
    if (!user.completedRoutes) return;
    return user.completedRoutes.length === 0 ? (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <h6>
          You haven't completed any routes yet.{' '}
          <Link to="/climbingroutes">View Some Routes</Link> and start climbing!
        </h6>
      </div>
    ) : (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <h6>
          Highest Route Completed:
          {user.completedRouteInfo
            ? mapCompletedRoutes().reduce((best, route) => {
                return gradeNumber(route.thisRoute.grade) >= gradeNumber(best)
                  ? route.thisRoute.grade
                  : best;
              }, 'VB')
            : 'None completed'}
        </h6>
      </div>
    );
  }
  userRoutes() {
    const { user } = this.props;
    if (!user.completedRouteInfo || !this) return;
    return this.mapCompletedRoutes().length === 0 ? null : (
      <div>
        <h5 style={{ display: 'flex', justifyContent: 'center' }}>
          Your Completed Routes
        </h5>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          {this.mapCompletedRoutes().map(_r => (
            <RouteTile key={_r.id} route={_r.thisRoute} user={user} />
          ))}
        </div>
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
    console.log('USER IN PROFILE IS: ', user);
    if (user.userType === undefined) return <Redirect to="login" />;
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
