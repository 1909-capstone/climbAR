import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';
import {
  uploadRouteVideo,
  removeRouteVideo
} from '../redux/thunks/routeVideoThunks.js';
import { Link } from 'react-router-dom';
import style from '../css/singleRoute.css';
import { user } from '../redux/reducers';
import { Button } from 'react-bootstrap';

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

  handleOnRemove = (video, routeId) => {
    this.props.removeRouteVideo(video, routeId);
  };

  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
  }
  betaVideos(route) {
    if (!route || !route.videos) return '';
    return route.videos.length === 0 ? (
      <div>No beta videos yet for this route :(</div>
    ) : (
      route.videos.map(_v => (
        <div key={_v.id}>
          <div>
            <div>
              <video width="400" controls muted="muted">
                <source src={_v.url} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="remove-video">
              <Button
                variant="outline-dark"
                onClick={() => this.handleOnRemove(_v, route.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))
    );
  }
  render() {
    const {
      props: { climbingRoute, user },
      state: { fileName },
      betaVideos
    } = this;
    return (
      <main className="single-route">
        <h5>Selected Climbing Route</h5>
        <div> Grade: {climbingRoute.grade}</div>
        <div> Hold Color: {climbingRoute.holdColor}</div>
        <div> Expiring On: {climbingRoute.endDate}</div>
        <Button
          className="view-model-button"
          to={`/model/${climbingRoute.id}`}
          variant="outline-secondary"
        >
          View Model
        </Button>
        <div className="video-section">
          {user.userType && (
            <div>
              <h5 className="share-your-beta">Share Your Beta</h5>
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
                    className="btn btn-dark btn-block mt-4"
                  />
                </form>
              </Fragment>
            </div>
          )}
        </div>
        <h5 className="video-title">Beta Videos</h5>
        {betaVideos(climbingRoute)}
      </main>
    );
  }
}

const mapState = ({ climbingRoute, user }) => ({ climbingRoute, user });

const mapDispatch = dispatch => {
  return {
    fetchSingleClimbingRoute: id => dispatch(fetchSingleClimbingRoute(id)),
    uploadRouteVideo: videoData => dispatch(uploadRouteVideo(videoData)),
    removeRouteVideo: (video, routeId) =>
      dispatch(removeRouteVideo(video, routeId))
  };
};

export default connect(mapState, mapDispatch)(SingleClimbingRoute);
