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
  }
  gradeNumber(grade) {
    return Number(grade.replace(/V/, ''));
  }
  bestRoute() {
    const { user } = this.props;
    console.log(user);
    if (!user.completedRoutes) return;
    return user.completedRoutes.length === 0 ? (
      <div>
        You haven't completed any routes yet
        {<Link to="/climbingroutes">climbingroutes</Link>} View Some Routes and
        start climbing!
      </div>
    ) : (
      <div>
        Highest Route Completed:
        {user.completedRoutes.reduce(
          (best, route) =>
            gradeNumber(route.grade) > gradeNumber(best) ? route.grade : best,
          'VB'
        )}
      </div>
    );
  }
  userRoutes() {
    const { user } = this.props;
    if (!user.completedRoutes) return;
    return user.completedRoutes.length === 0 ? null : (
      <div>
        {user.completedRoutes.map(_r => (
          <RouteTile route={_r} />
        ))}
      </div>
    );
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
export default connect(mapState)(Profile);
