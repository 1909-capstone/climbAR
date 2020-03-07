import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadRouteImage } from '../redux/thunks/routeImagesThunks';

class ImageUploadForm extends Component {
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
    formData.append('user', this.props.user);
    this.props.uploadRouteImage(formData);
  };
  render() {
    const { fileName } = this.state;
    return (
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
    );
  }
}
const mapState = ({ user, climbingRoute }) => ({ user, climbingRoute });
const mapDispatch = dispatch => {
  return {
    fetchSingleClimbingRoute: id => dispatch(fetchSingleClimbingRoute(id)),
    uploadRouteImage: (file ) =>
      dispatch(uploadRouteImage(file))
  };
};
export default connect(null, mapDispatch)(ImageUploadForm);
