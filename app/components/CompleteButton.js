import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { markComplete, unComplete } from '../redux/thunks/UserThunks';
import style from '../css/routeTile.css';
import Button from 'react-bootstrap/Button';

class CompleteButon extends React.Component {
  constructor() {
    super();
    this.completedRoute = this.completedRoute.bind(this);
    this.complete = this.complete.bind(this);
  }
  completedRoute() {
    if (!this.props.user.completedRoutes) return false;
    return (
      this.props.user.completedRoutes.filter(
        _r => _r.climbingRouteId === this.props.route.id
      )[0] && true
    );
  }
  complete() {
    if (!this.props.user.userType) {
      alert('Log in to complete a route!');
      return;
    }
    if (this.completedRoute()) {
      this.props.unComplete(this.props.user, this.props.route);
    } else {
      this.props.markComplete(this.props.user, this.props.route);
    }
  }
  render() {
    const { route } = this.props;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span onClick={this.complete} className="complete-button">
          {this.completedRoute() ? (
            <i className="complete-icon large material-icons complete">done</i>
          ) : (
            <i className="complete-icon large material-icons">done</i>
          )}
        </span>
        <span>{route.completedRoutes.length}</span>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = dispatch => {
  return {
    markComplete: (user, route) => dispatch(markComplete(user, route)),
    unComplete: (user, route) => dispatch(unComplete(user, route))
  };
};

export default connect(mapState, mapDispatch)(CompleteButon);
