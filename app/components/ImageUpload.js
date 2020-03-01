import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadRouteImage } from '../redux/thunks/routeImagesThunks';
import ImageUploadForm from './ImageUploadForm'

const ImageUpload = () => (
  <div className='container mt-4'> 
    <ImageUploadForm/> 
  </div>
)

const mapDispatch = dispatch => {
  return {
    uploadRouteImage: file => dispatch(uploadRouteImage(file))
  };
};
export default connect(null, mapDispatch)(ImageUpload);
