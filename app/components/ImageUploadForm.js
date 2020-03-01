import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadRouteImage } from '../redux/thunks/routeImagesThunks';

class ImageUploadForm extends Component {
  state = {
    file: null,
    fileName: 'Choose File',
    uploadedFile: {}
  };
  fileSelectedHandler = event => {
    this.setState({
      file: event.target.files[0],
      fileName: event.target.files[0].name
    });
  };
  handleOnSubmit = e => {
    //default Javascript Object in order to send a file
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);
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
            className="btn btn-primary btn-block mt-4"
          />
        </form>
      </Fragment>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    uploadRouteImage: file => dispatch(uploadRouteImage(file))
  };
};
export default connect(null, mapDispatch)(ImageUploadForm);
