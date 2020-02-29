import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadRouteImage } from './../redux/thunks/routeImagesThunks';

class ImageUpload extends Component {
  state = {
    selectedFile: null
  };
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  fileUploadHandler = () => {
    this.props.uploadRouteImage(this.state)
  };
  render() {
    return (
      <div>
        <div> Upload </div>
        <div> this is the image </div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <Button onClick={this.fileUploadHandler}> Upload </Button>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    uploadRouteImage: (file) => dispatch(uploadRouteImage(file)),
  };
};
export default connect(null, mapDispatch)(ImageUpload);
