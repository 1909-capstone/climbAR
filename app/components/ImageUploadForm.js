import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
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
    const { values } = this.props;
    console.log('these are the values', this.props); 

    const formData = new FormData();
    //default Javascript Object in order to send a file and appending data to the file object
    formData.append('file', this.state.file);
    formData.append('user', this.props.user);
    // Object.keys(values).forEach(key => {
    //   formData.append(`${[key]}`, values[key]);
    // });
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
const mapState = ({ user, routeModel }) => ({ user, routeModel });

const mapDispatch = dispatch => {
  return {
    uploadRouteImage: file => dispatch(uploadRouteImage(file))
  };
};
export default connect(mapState, mapDispatch)(ImageUploadForm);
