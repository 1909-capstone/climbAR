import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { logoutUser } from '../redux/thunks/UserThunks';
import { connect } from 'react-redux';

class Navigation extends Component {
  switchNavBar = params => {
    const { logoutUser, user } = this.props;
    switch (params.userType) {
      case 'Admin':
        return (
          <Nav>
            <Nav.Link
              href="/admin/create"
              style={{
                color: 'white'
              }}
            >
              Create Route
            </Nav.Link>

            <Nav.Link
              href={`/user/${params.id}`}
              style={{
                color: 'white'
              }}
            >
              {user.email.replace(/@[aA-zZ | . | 0-9]*/, '')}
            </Nav.Link>
            <Button
              onClick={() => {
                logoutUser(user.id);
              }}
            >
              Log Out
            </Button>
          </Nav>
        );
        break;
      case 'Climber':
        return (
          <Nav>
            <Nav.Link
              href={`/user/${params.id}`}
              style={{
                color: 'white'
              }}
            >
              {user.email.replace(/@[aA-zZ | . | 0-9]*/, '')}
            </Nav.Link>
            <Button
              onClick={() => {
                logoutUser(user.id);
              }}
            >
              Log Out
            </Button>
          </Nav>
        );
      default:
        return (
          <Nav>
            <Nav.Link
              href="/login"
              style={{
                color: 'white'
              }}
            >
              Log In
            </Nav.Link>
            <Nav.Link
              href="/signup"
              style={{
                color: 'white'
              }}
            >
              Sign Up
            </Nav.Link>
          </Nav>
        );
    }
  };
  render() {
    const { user } = this.props;
    return (
      <Navbar
        bg="dark"
        style={{
          height: '7rem',
          backgroundColor: 'black',
          fontWeight: '100',
          padding: '0 5rem'
        }}
      >
        <Navbar.Brand>Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            href="/"
            style={{
              color: 'white'
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/climbingroutes"
            style={{
              color: 'white'
            }}
          >
            Climbing Routes
          </Nav.Link>
        </Nav>
        <Nav>{this.switchNavBar(user)}</Nav>
      </Navbar>
    );
  }
}

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    logoutUser: userId => dispatch(logoutUser(userId))
  };
};

export default connect(mapState, mapDispatch)(Navigation);
