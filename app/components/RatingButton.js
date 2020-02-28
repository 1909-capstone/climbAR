import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeRoute, unLikeRoute } from '../redux/thunks/UserThunks';
import style from '../css/routeTile.css';
import Button from 'react-bootstrap/Button';

class RatingButton extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Button onClick={this.like} variant="info">
          <span className={this.likesThisRoute() ? 'heart liked' : 'heart'}>
            Rate
          </span>
        </Button>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = dispatch => {
  return {
    rate: (user, route, rating) => dispatch(likeRoute(user, route, rating))
  };
};

export default connect(mapState, mapDispatch)(RatingButton);
