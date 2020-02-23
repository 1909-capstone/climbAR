import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logInUser } from '../redux/thunks/userThunks';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    return (
      <Fragment>
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px'
          }}
        >
          <Form.Group
            style={{
              width: '50%'
            }}
          >
            <Form.Label>Email Address</Form.Label>
            <Col>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            style={{
              width: '50%'
            }}
          >
            <Form.Label>Password</Form.Label>
            <Col>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <p>
            Not a user? <Nav.Link href="/signup">Sign up</Nav.Link>
          </p>
          <Button onClick={this.onSubmit}>Log In</Button>
        </Form>
      </Fragment>
    );
  }
}

const mapState = state => {
  const user = state.user;
  return {
    user
  };
};

const mapDispatch = dispatch => {
  return {
    logIn: credentials => dispatch(logInUser(credentials))
  };
};
export default connect(mapState, mapDispatch)(Login);
