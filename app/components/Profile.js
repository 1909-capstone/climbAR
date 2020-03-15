import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/thunks/UserThunks';
import { Link, Redirect } from 'react-router-dom';
import RouteTile from './RouteTile';
import BetaVideo from './BetaVideo';
import CompletedRouteChart from './CompletedRouteChart';

class Profile extends React.Component {
  constructor() {
    super();
    this.bestRoute = this.bestRoute.bind(this);
    this.userRoutes = this.userRoutes.bind(this);
    this.mapCompletedRoutes = this.mapCompletedRoutes.bind(this);
    this.sortByCompleteDate = this.sortByCompleteDate.bind(this);
  }
  gradeNumber(grade) {
    return grade === 'VB' ? 0 : Number(grade.replace(/V/, ''));
  }
  bestRoute(joinCompletedRoutes) {
    const {
      props: { user },
      gradeNumber,
      mapCompletedRoutes
    } = this;
    // if (!user.completedRoutes) return;
    return !user.completedRoutes || user.completedRoutes.length === 0 ? (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          paddingTop: '30px'
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
          padding: '10px',
          paddingTop: '30px'
        }}
      >
        <h6>
          Highest Route Completed:
          {user.completedRouteInfo
            ? joinCompletedRoutes.reduce((best, route) => {
              return gradeNumber(route.thisRoute.grade) >= gradeNumber(best)
                ? route.thisRoute.grade
                : best;
            }, 'VB')
            : 'None completed'}
        </h6>
      </div>
    );
  }
  userRoutes(joinCompletedRoutes) {
    const { user } = this.props;
    if (!user.completedRouteInfo || !this) return;
    return joinCompletedRoutes.length === 0 ? null : (
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
      }}>
          {joinCompletedRoutes.map(_r => (
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
  sortByCompleteDate(completedRoutes, ascending) {
    const sorted = ascending
      ? completedRoutes.sort((a, b) => {
          a = new Date(a.completeDate).getTime();
          b = new Date(b.completeDate).getTime();
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        })
      : completedRoutes.sort((a, b) => {
          a = new Date(a.completeDate).getTime();
          b = new Date(b.completeDate).getTime();
          if (a < b) return 1;
          if (a > b) return -1;
          return 0;
        });
    return sorted.map(_r => ({
      ..._r.thisRoute,
      completeDate: _r.completeDate
    }));
  }
  render() {
    const {
      props: { user },
      sortByCompleteDate,
      mapCompletedRoutes
    } = this;
    if (user.userType === undefined) return <Redirect to="login" />;
    const joinCompletedRoutes = mapCompletedRoutes();
    return (
      <div>
        <div>All time completed routes: {user.completedRoutes.length}</div>
        <div>{this.bestRoute(joinCompletedRoutes)}</div>
        <div>{this.userRoutes(joinCompletedRoutes)}</div>
        <div>{this.userVideos()}</div>
        <div>Charts {`&`} Analysis</div>
        <div>Completed Routes by Date Completed</div>
        <div>
          <small>
            All of your completed routes listed in chronological order from
            first completed to most recently completed
          </small>
        </div>
        <CompletedRouteChart
          completedRoutes={sortByCompleteDate(joinCompletedRoutes, true)}
        />
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
