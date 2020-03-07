import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageUploadForm from './ImageUploadForm';
import { Button } from 'react-bootstrap';
import { createRouteModelByImage } from '../redux/thunks/routeModelThunks';

class ImageComponent extends Component {
  uploadPrevious = e => {
    e.preventDefault();
    this.props.uploadImagePrevStep();
  };
  render() {
    const {
      routeImage,
      createRouteModelByImage,
      routeModel,
      values
    } = this.props;
    return (
      <div className="container mt-4">
        <ImageUploadForm />
        {routeImage ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <h3 className="text-center"> {routeImage.fileName} </h3>
              <img style={{ width: '100%' }} src={routeImage.filePath} />
            </div>
          </div>
        ) : null}
        <Button
          label="previous"
          onClick={this.uploadPrevious}
          variant="outline-dark"
        >
          Previous
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            createRouteModelByImage(routeModel);
          }}
        >
          Save New Route
        </Button>
      </div>
    );
  }
}

const mapState = ({ routeImage, routeModel }) => ({ routeImage, routeModel });

const mapDispatch = dispatch => {
  return {
    createRouteModelByImage: model => dispatch(createRouteModelByImage(model))
  };
};

export default connect(mapState, mapDispatch)(ImageComponent);
