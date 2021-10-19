import React, { useState } from 'react';
import './Login.css';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { googleSignIn, logInUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect_url = location?.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleLogInForm = (e) => {
        logInUser(email, password)
            .then((result) => {
                history.push(redirect_url);
            })
        e.preventDefault();
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (

        <Container>
            <div className="login-form">
                <h2>LogIn Form</h2>

                <Form onSubmit={handleLogInForm}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>

                <p>New User? <Link to="/registration">Create Account</Link></p>
                <div>----------------- or ---------------</div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </Container>
    );
};

export default Login;