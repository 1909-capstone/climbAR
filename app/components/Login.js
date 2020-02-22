import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Nav } from 'react-bootstrap';
//import { logInUser } from '../redux/thunks/UserThunks';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    render(){
        return (
            <Fragment>
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Col><Form.Control name='email' type='email' placeholder='Enter email address' onChange={this.handleChange}/></Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Col><Form.Control name='password' type='password' placeholder='Enter password' onChange={this.handleChange}/></Col>
                    </Form.Group>
                    <p>Not a user? <Nav.Link href='/signup'>Sign up</Nav.Link>></p>
                    <Button onClick={this.onSubmit}>
                    Log In
                    </Button>
                </Form>
            </Fragment>
        )
    }
}

export default Login;
