import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Image,
  NavItem
} from 'react-bootstrap';
import { logoutUser } from '../redux/thunks/UserThunks';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import style from '../css/navigation.css';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  switchNavBar = params => {
    const { logoutUser, user } = this.props;
    switch (params.userType) {
      case 'Admin':
        return (
          <Nav>
            <LinkContainer
              to="/admin/create"
              id="create-route"
              style={{
                color: '#f0eae3',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Nav.Link>Create Route</Nav.Link>
            </LinkContainer>
            <NavDropdown
              title={
                <span id="nav-dropdown">
                  {user.email.replace(/@[aA-zZ | . | 0-9]*/, '')}
                  <i className="material-icons">arrow_drop_down</i>
                </span>
              }
            >
              <NavDropdown.Item to={`/profile`}>Profile</NavDropdown.Item>
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
              <NavDropdown.Item to={`/profile`}>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">
                <Button
                  onClick={() => {
                    console.log('calling onClick button in Climber navbar');
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
            <LinkContainer to="/login" style={{ color: '#e45720' }}>
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup" style={{ color: '#e45720' }}>
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
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
          <LinkContainer
            to="/"
            style={{
              color: '#f0eae3'
            }}
          >
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer
            to="/climbingroutes"
            style={{
              color: '#f0eae3'
            }}
          >
            <Nav.Link>Climbing Routes</Nav.Link>
          </LinkContainer>
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
