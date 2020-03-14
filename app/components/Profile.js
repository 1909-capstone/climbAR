import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/thunks/UserThunks';
import { Link, Redirect } from 'react-router-dom';
import RouteTile from './RouteTile';
import BetaVideo from './BetaVideo';

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
      <div>
        You haven't completed any routes yet.{' '}
        <Link to="/climbingroutes">View Some Routes</Link> and start climbing!
      </div>
    ) : (
      <div>
        Highest Route Completed:
        {user.completedRouteInfo
          ? mapCompletedRoutes().reduce((best, route) => {
              return gradeNumber(route.thisRoute.grade) >= gradeNumber(best)
                ? route.thisRoute.grade
                : best;
            }, 'VB')
          : 'None completed'}
      </div>
    );
  }
  userRoutes() {
    const { user } = this.props;
    if (!user.completedRouteInfo || !this) return;
    return this.mapCompletedRoutes().length === 0 ? null : (
      <div>
        <div>Your Completed Routes</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.mapCompletedRoutes().map(_r => (
            <RouteTile key={_r.id} route={_r.thisRoute} user={user} />
          ))}
        </div>
      </div>
    );
  }
  userVideos() {
    const { user } = this.props;
    return user.videos.length === 0 ? (
      <div>You haven't uploaded any beta videos yet.</div>
    ) : (
      <div>
        <div>Your Beta Videos</div>
        {user.videos.map(_v => (
          <BetaVideo key={_v.id} video={_v} routeId={_v.climbingRouteId} />
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
    if (user.userType === undefined) return <Redirect to="login" />;
    return (
      <div>
        <div>{this.bestRoute()}</div>
        <div>{this.userRoutes()}</div>
        <div>{this.userVideos()}</div>
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
