import React from 'react';
import style from '../css/routeTile.css';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import CompleteButton from './CompleteButton';
import RatingButon from './RatingButton';
import RatingDisplay from './RatingDisplay';
import { average } from '../utils';
import { withRouter } from 'react-router-dom';

class RouteTile extends React.Component {
  constructor() {
    super();
    this.editRoute = this.editRoute.bind(this);
  }
  editRoute() {
    this.props.editModel(this.props.route);
    this.props.history.push('/admin/create');
  }
  render() {
    const { route, user, editModel } = this.props;
    const component = this;
    const avgRating = average(route.ratings, 'rating');
    const daysToExpire = () => {
      const expDate = new Date(route.endDate).getTime();
      const today = new Date().getTime();
      const hoursToExpire = Math.floor((expDate - today) / (1000 * 60 * 60));
      if (hoursToExpire <= 24) return 'Today';
      return `In ${Math.floor(hoursToExpire / 24)} days`;
    };
    const darkColor = route =>
      ['black', 'green', 'purple'].indexOf(route.holdColor) !== -1;
    return (
      <div className="routeTile">
        <div
          className="color-bar"
          style={{
            flexGrow: 1,
            backgroundColor: route.holdColor,
            color: darkColor(route) ? 'white' : 'black',
            fontWeight: '700',
            width: '100%',
            height: '2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.75em'
          }}
        >
          {route.grade}
        </div>
        <div className="route-metrics">
          <LikeButton route={route} />
          <CompleteButton route={route} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <RatingDisplay avgRating={avgRating} />
            <small>difficulty</small>
          </div>
          {user.userType && <RatingButon route={route} />}
        </div>
        <div>
          <i className="large material-icons">schedule</i> Expiring{' '}
          {daysToExpire()}
        </div>
        <div
          style={{
            display: 'flex',
            width: '95%',
            height: '2.5em',
            padding: '0 2.5% 0 2.5%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Link
            className="btn btn-info btn-sm"
            key={route.id}
            to={`/climbingroutes/${route.id}`}
          >
            More
          </Link>
          <div onClick={this.editRoute}>
            {user.userType === 'Admin' && (
              <i className="material-icons">create</i>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RouteTile);
