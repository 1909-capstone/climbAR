import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageUploadForm from './ImageUploadForm';

class ImageComponent extends Component {
  render() {
    const { routeImage } = this.props;
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
      </div>
    );
  }
}

const mapState = ({ routeImage }) => ({ routeImage });

export default connect(mapState)(ImageComponent);
