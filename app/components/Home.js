import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
      }}>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: '2em',
            marginTop: '5em'
          }}
        >
          Connect Collaborate &amp; Create Amazing Climbing Routes
        </div>
        <img src="/uploads/logo.png" width="800" height="500" />
        </div>  

    );
  }
}

export default Home;
