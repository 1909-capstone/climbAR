import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logInUser } from '../redux/thunks/UserThunks';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      emailError: '',
      passwordError: ''
    }
  };

  //form error handling
  validate = (field, value) => {
    const { errors } = this.state;
    switch (field) {
      case 'email':
        if (!value.match(/\S+@\S+\.\S+/)) {
          this.setState({
            errors: {
              ...errors,
              emailError: 'This is not a valide mail'
            }
          });
        } else {
          this.setState({
            errors: {
              ...errors,
              emailError: ''
            }
          });
        }
        break;
      case 'password':
        if (!value) {
          this.setState({
            errors: {
              ...errors,
              passwordError: ''
            }
          });
        }
      default:
        break;
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value
      },
      () => this.validate(name, value)
    );
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.props.logIn(this.state);
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const {
      email,
      password,
      errors: { emailError, passwordError }
    } = this.state;
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
                value={email}
                onChange={this.handleChange}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid" className="text-danger">
                {emailError}
              </Form.Control.Feedback>
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
                value={password}
                onChange={this.handleChange}
                isInvalid={!!passwordError}
              />
              <Form.Control.Feedback type="invalid" className="text-danger">
                {passwordError}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <p>
            Not a user? <Nav.Link href="/signup">Sign up</Nav.Link>
          </p>
          <Button
            disabled={!email || !password || emailError || passwordError}
            onClick={this.onSubmit}
          >
            Log In
          </Button>
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
