import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
const { Group, Label, Control, Text, Row, Col } = Form;
import { createUser } from '../redux/thunks/userThunks';

class Signup extends Component {
  state = {
    email: '',
    userType: 'Climber',
    password: '',
    confirmPassword: ''
  };
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
            />
          </Group>
          <Group
            controlId="password"
            style={{
              width: '50%'
            }}
          >
            <Label>PASSWORD</Label>
            <Control
              type="password"
              name="password"
              value={password}
              onChange={this.handleOnChange}
            />
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
            />
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
