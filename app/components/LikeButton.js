import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import style from '../css/routeTile.css';
import Button from 'react-bootstrap/Button';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.likesThisRoute = this.likesThisRoute.bind(this);
  }
  likesThisRoute() {
    return this.props.user.likedRoutes[this.props.route.id];
  }
  render() {
    console.log('like button props ', this.props);
    return (
      <Button variant="info">
        <span className={this.likesThisRoute() ? 'heart liked' : 'heart'}>
          &#9829;
        </span>
      </Button>
    );
  }
}

const mapState = ({ user }) => ({ user });

export default connect(mapState)(LikeButton);
