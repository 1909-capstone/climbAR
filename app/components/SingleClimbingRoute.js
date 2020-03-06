import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';
import { uploadRouteVideo } from '../redux/thunks/routeVideoThunks.js';
import { Link } from 'react-router-dom';
import style from '../css/singleRoute.css';
import { user } from '../redux/reducers';

class SingleClimbingRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
      fileName: 'Choose File'
    };
    this.betaVideos = this.betaVideos.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  fileSelectedHandler = event => {
    this.setState({
      file: event.target.files[0],
      fileName: event.target.files[0].name
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const { climbingRoute, user, uploadRouteVideo } = this.props;
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('climbingRouteId', climbingRoute.id);
    formData.append('userId', user.id);
    uploadRouteVideo(formData);
  };
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
  }
  betaVideos(route) {
    if (!route || !route.videos) return '';
    return route.videos.length === 0
      ? 'No beta videos yet for this route :('
      : route.videos.map(_v => <div key={_v.id}>{_v.id}</div>);
  }
  render() {
    const {
      props: { climbingRoute, user },
      state: { fileName },
      betaVideos
    } = this;
    return (
      <main className="single-route">
        <div> Grade: {climbingRoute.grade}</div>
        <div> Hold Color: {climbingRoute.holdColor}</div>
        <div> Expiring On: {climbingRoute.endDate}</div>
        <Link to={`/model/${climbingRoute.id}`} style={{ color: '#e4572e' }}>
          View Model
        </Link>
        <div>
          {user.userType && (
            <div>
              <div>Share Your Beta</div>
              <Fragment>
                <form onSubmit={this.handleOnSubmit}>
                  <div className="custom-file mb-4">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      onChange={this.fileSelectedHandler}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      {fileName}
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Upload"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </Fragment>
            </div>
          )}
        </div>
        <div>Beta Videos</div>
        {betaVideos(climbingRoute)}
      </main>
    );
  }
}

const mapState = ({ climbingRoute, user }) => ({ climbingRoute, user });

const mapDispatch = dispatch => {
  return {
    fetchSingleClimbingRoute: id => dispatch(fetchSingleClimbingRoute(id)),
    uploadRouteVideo: videoData => dispatch(uploadRouteVideo(videoData))
  };
};

export default connect(mapState, mapDispatch)(SingleClimbingRoute);
