import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { markComplete, unComplete } from '../redux/thunks/userThunks';
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
    if (this.completedRoute()) {
      this.props.unComplete(this.props.user, this.props.route);
    } else {
      this.props.markComplete(this.props.user, this.props.route);
    }
  }
  render() {
    return (
      <div>
        <Button onClick={this.complete} variant="info">
          <span className={this.completedRoute() ? 'check complete' : 'check'}>
            &#10003;
          </span>
        </Button>
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
