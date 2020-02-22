import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
const { Group, Label, Control, Text, Row, Col } = Form;
import { createUser } from '../redux/thunks/UserThunks';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const { id } = this.props.user;
    console.log('this is hte props', this.props.user);
    this.props.createUser({ ...this.state, id });
    this.setState({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };
  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <div>
        <Form>
          <Group
            controlId="email"
            style={{
              width: '50%'
            }}
          >
            <Label>
              Email address
              <span style={{ color: 'red', fontSize: '10px' }}>*required</span>
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
              PASSWORD
              <span style={{ color: 'red', fontSize: '10px' }}>
                *required<br></br>Password must:<br></br>contain letters and
                numbers<br></br>Be between 8 and 20 characters in length
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
            <Label>CONFIRM PASSWORD</Label>
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
          <Button onClick={this.handleOnSubmit}>Sign Up</Button>
        </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
