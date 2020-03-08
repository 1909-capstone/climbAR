import React, { Component } from 'react';
import { Nav, Navbar, Button, NavDropdown, Image } from 'react-bootstrap';
import { logoutUser } from '../redux/thunks/UserThunks';
import { connect } from 'react-redux';
import style from '../css/navigation.css';

class Navigation extends Component {
  switchNavBar = params => {
    const { logoutUser, user } = this.props;
    switch (params.userType) {
      case 'Admin':
        return (
          <Nav>
            <Nav.Link
              href="/admin/create"
              id="create-route"
              style={{
                color: '#f0eae3',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Create Route
            </Nav.Link>
            <NavDropdown
              title={
                <span id="nav-dropdown">
                  {user.email.replace(/@[aA-zZ | . | 0-9]*/, '')}
                  <i className="material-icons">arrow_drop_down</i>
                </span>
              }
            >
              <NavDropdown.Item eventKey="4.1" href={`/profile`}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">
                <span
                  className="dropdown-item"
                  onClick={() => {
                    logoutUser(user.id);
                  }}
                >
                  Log Out
                </span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        );
        break;
      case 'Climber':
        return (
          <Nav id="nav-climber">
            <NavDropdown
              title={user.email.replace(/@[aA-zZ | . | 0-9]*/, '')}
              id="nav-dropdown"
            >
              <NavDropdown.Item eventKey="4.1" href={`/profile`}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">
                <Button
                  onClick={() => {
                    logoutUser(user.id);
                  }}
                >
                  Log Out
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        );
      default:
        return (
          <Nav id="nav-guest">
            <Nav.Link href="/login" style={{ color: '#e45720' }}>
              Log In
            </Nav.Link>
            <Nav.Link href="/signup" style={{ color: '#e45720' }}>
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
        id="navbar"
        bg="dark"
        style={{
          height: '7rem',
          fontWeight: '100',
          padding: '0 5rem'
        }}
      >
        <Navbar.Brand id="logo">ClimbAR</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            href="/"
            style={{
              color: '#f0eae3'
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/climbingroutes"
            style={{
              color: '#f0eae3'
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
