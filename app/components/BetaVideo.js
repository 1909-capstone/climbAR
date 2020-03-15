import React from 'react';
import { connect } from 'react-redux';
import { removeRouteVideo } from '../redux/thunks/routeVideoThunks.js';
import { Button } from 'react-bootstrap';

const BetaVideo = ({ video, routeId, removeRouteVideo }) => {
  return (
    <div>
      <div>
        <div>
          <video width="400" controls muted="muted">
            <source src={video.url} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div>
          <Button onClick={() => removeRouteVideo(video, routeId)}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = dispatch => {
  return {
    removeRouteVideo: (video, routeId) =>
      dispatch(removeRouteVideo(video, routeId))
  };
};

export default connect(null, mapDispatch)(BetaVideo);
