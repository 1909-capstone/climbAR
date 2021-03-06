import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeRoute, unLikeRoute } from '../redux/thunks/UserThunks';
import style from '../css/routeTile.css';
import Button from 'react-bootstrap/Button';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.likesThisRoute = this.likesThisRoute.bind(this);
    this.like = this.like.bind(this);
  }
  likesThisRoute() {
    if (!this.props.user.likedRoutes) return false;
    return (
      this.props.user.likedRoutes.filter(
        _r => _r.climbingRouteId === this.props.route.id
      )[0] && true
    );
  }
  like() {
    if (!this.props.user.userType) {
      alert('Log in to like a route');
      return;
    }
    if (this.likesThisRoute()) {
      this.props.unLikeRoute(this.props.user, this.props.route);
    } else {
      this.props.likeRoute(this.props.user, this.props.route);
    }
  }
  render() {
    const { route } = this.props;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span onClick={this.like} className="like-button">
          {this.likesThisRoute() ? (
            <i className="large material-icons liked">favorite</i>
          ) : (
            <i className="large material-icons">favorite_border</i>
          )}
        </span>
        <span>{route.likedRoutes.length}</span>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = dispatch => {
  return {
    likeRoute: (user, route) => dispatch(likeRoute(user, route)),
    unLikeRoute: (user, route) => dispatch(unLikeRoute(user, route))
  };
};

export default connect(mapState, mapDispatch)(LikeButton);
