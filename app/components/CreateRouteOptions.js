import React, { Component, Fragment } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { htmlDate } from '../utils';

class CreateRouteOptions extends Component {
  render() {
    return (
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <div>Please select on how you want to create your Climbing Route! </div>
        <Button href="/admin/create/form " variant="outline-dark" size="lg">
          Create Route Form
        </Button>
        <Button href="/admin/upload" variant="outline-dark" size="lg">
          Upload Image
        </Button>
      </Form>
    );
  }
}

export default CreateRouteOptions;
