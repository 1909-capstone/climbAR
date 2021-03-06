import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { rate } from '../redux/thunks/UserThunks';
import style from '../css/ratingButton.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import RatingForm from './RatingForm';

class RatingButton extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <OverlayTrigger
          placement="top"
          trigger="click"
          delay={{ show: 250, hide: 5000 }}
          overlay={
            <Popover>
              <Popover.Title as="h3">Rate this Route?</Popover.Title>
              <Popover.Content>
                <RatingForm route={this.props.route} />
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="dark" size="sm">
            <span>Rate</span>
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = dispatch => {
  return {
    rate: (user, route, rating) => dispatch(rate(user, route, rating))
  };
};

export default connect(mapState, mapDispatch)(RatingButton);
