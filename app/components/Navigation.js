import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
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
        href="/admin/create"
        style={{
          color: 'white'
        }}
      >
        Create Route
      </Nav.Link>
      <Nav.Link
        href="/login"
        style={{
          color: 'white'
        }}
      >
        Login
      </Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link
        href="/signup"
        style={{
          color: 'white'
        }}
      >
        Signup
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigation;
