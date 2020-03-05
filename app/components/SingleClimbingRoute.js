import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';
import { Link } from 'react-router-dom';
import style from '../css/singleRoute.css';

class SingleClimbingRoute extends React.Component {
  state = {
    file: null,
    fileName: 'Choose File'
  };
  fileSelectedHandler = event => {
    this.setState({
      file: event.target.files[0],
      fileName: event.target.files[0].name
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    //default Javascript Object in order to send a file
    formData.append('file', this.state.file);
    this.props.uploadRouteImage(formData);
  };
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
  }
  render() {
    const {
      props: { climbingRoute },
      state: { fileName }
    } = this;
    return (
      <main className="single-route">
        <div> Grade: {climbingRoute.grade}</div>
        <div> Hold Color: {climbingRoute.holdColor}</div>
        <div> Expiring On: {climbingRoute.endDate}</div>
        <Link to={`/model/${climbingRoute.id}`} style={{ color: '#e4572e' }}>
          View Model
        </Link>
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
        <div>Beta Videos</div>
        {climbingRoute.videos &&
          climbingRoute.videos.map(_v => <div>{_v.id}</div>)}
      </main>
    );
  }
}

const mapState = ({ climbingRoute }) => ({ climbingRoute });

const mapDispatch = dispatch => {
  return {
    fetchSingleClimbingRoute: id => dispatch(fetchSingleClimbingRoute(id))
  };
};

export default connect(mapState, mapDispatch)(SingleClimbingRoute);
