import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeRoute } from '../redux/thunks/UserThunks';
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
    return this.props.user.likedRoutes.indexOf(this.props.route.id) !== -1;
  }
  like() {
    if (this.likesThisRoute()) return;
    this.props.likeRoute(this.props.user, this.props.route);
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
    likeRoute: (user, route) => dispatch(likeRoute(user, route))
  };
};

export default connect(mapState, mapDispatch)(LikeButton);
