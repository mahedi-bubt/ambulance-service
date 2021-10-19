import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (

        <Container>
            <div>
                <h2>LogIn Form</h2>
                {/* <form>
                    <input type="email" name="" id="" placeholder="Enter Your Email..." /> <br />
                    <input type="password" name="" id="" placeholder="Enter Password.." /> <br />
                    <input type="submit" value="Submit" />
                </form> */}
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
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
                <button onClick={googleSignIn}>Google Sign In</button>
            </div>
        </Container>
    );
};

export default Login;