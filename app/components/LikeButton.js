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
    console.log('like this route ? ', this.likesThisRoute());
    if (this.likesThisRoute()) {
      this.props.unLikeRoute(this.props.user, this.props.route);
    } else {
      this.props.likeRoute(this.props.user, this.props.route);
    }
  }
  render() {
    console.log('like button props ', this.props);
    return (
      <div>
        <Button onClick={this.like} variant="info">
          <span className={this.likesThisRoute() ? 'heart liked' : 'heart'}>
            &#9829;
          </span>
        </Button>
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
