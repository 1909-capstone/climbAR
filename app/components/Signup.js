import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Button } from 'react-bootstrap';
const { Group, Label, Control, Text, Row, Col } = Form;
import { createUser } from '../redux/thunks/UserThunks';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  state = {
    email: '',
    userType: 'Climber',
    password: '',
    confirmPassword: '',
    errors: {
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    }
  };
  //form handling error function
  validate = (field, value) => {
    const { errors } = this.state;
    switch (field) {
      case 'email':
        //using regex to check the email that must have the '@' and '.'
        if (!value.match(/\S+@\S+\.\S+/)) {
          this.setState({
            errors: {
              ...errors,
              emailError: 'This is not a valid email'
            }
          });
        } else if (!value) {
          this.setState({
            errors: {
              ...errors,
              emailError: 'Required field'
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
              passwordError: 'Required field'
            }
          });
        } else {
          this.setState({
            errors: {
              ...errors,
              passwordError: ''
            }
          });
        }
        break;
      case 'confirmPassword':
        if (value !== this.state.password) {
          this.setState({
            errors: {
              ...errors,
              confirmPasswordError: 'Passwords must match'
            }
          });
        } else {
          this.setState({
            errors: {
              ...errors,
              confirmPasswordError: ''
            }
          });
        }
      default:
        break;
    }
  };
  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validate(name, value));
  };
  handleOnSubmit = event => {
    event.preventDefault();
    const { id } = this.props.user;
    this.props.createUser({ ...this.state, id });
    this.setState({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };
  render() {
    const {
      email,
      password,
      confirmPassword,
      errors: { emailError, passwordError, confirmPasswordError }
    } = this.state;
    const { user } = this.props;
    return (
      <div>
        {user.userType ? (
          <Redirect to="/" />
        ) : (
          <div>
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <h2> Create your account for climbAR</h2>
              <Group
                controlId="email"
                style={{
                  width: '50%'
                }}
              >
                <Label>
                  Email address
                  <span style={{ color: 'red', fontSize: '10px' }}>
                    *required
                  </span>
                </Label>
                <Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleOnChange}
                  isInvalid={!!emailError}
                />
                <Control.Feedback type="invalid" className="text-danger">
                  {emailError}
                </Control.Feedback>
              </Group>
              <Group
                controlId="password"
                style={{
                  width: '50%'
                }}
              >
                <Label>
                  Password
                  <span style={{ color: 'red', fontSize: '10px' }}>
                    *required
                  </span>
                </Label>
                <Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleOnChange}
                  isInvalid={!!passwordError}
                />
                <Control.Feedback type="invalid" className="text-danger">
                  {passwordError}
                </Control.Feedback>
              </Group>
              <Group
                controlId="confirmPassword"
                style={{
                  width: '50%'
                }}
              >
                <Label>Confirm Password</Label>
                <Control
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleOnChange}
                  isInvalid={!!confirmPasswordError}
                />
                <Control.Feedback type="invalid" className="text-danger">
                  {confirmPasswordError}
                </Control.Feedback>
              </Group>
              <div>
                Already a user?{' '}
                <Link to={'/login'} style={{ color: '#E45720' }}>
                  Login
                </Link>
              </div>
              <Button
                disabled={
                  !email ||
                  !password ||
                  !confirmPassword ||
                  emailError ||
                  passwordError ||
                  confirmPasswordError
                }
                onClick={this.handleOnSubmit}
              >
                Sign Up
              </Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => {
  return {
    createUser: form => dispatch(createUser(form))
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Signup);
