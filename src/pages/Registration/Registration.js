import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Registration.css';

const Registration = () => {
    const { createUser, updateUserDetails, user } = useAuth();
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = (e) => {
        /* console.log(email, password) */
        createUser(email, password)
            .then(result => {
                console.log(result)
            }).catch(err => {
                setError(err);
            });
        updateUserName();
        e.preventDefault();
    }
    const updateUserName = () => {
        updateUserDetails(username)
            .then(result => {
                console.log(result.username)
            }).catch((error) => {

            });
    }

    const handleUserName = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className=" form App">
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleRegistration}>
                <h2>Sign Up!</h2>
                <fieldset>
                    <legend>Create Account</legend>
                    <ul>
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" onChange={handleUserName} id="username" required />
                        </li>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input onChange={handleEmail} type="email" id="email" required />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input onChange={handlePassword} type="password" id="password" required />
                        </li>
                    </ul>
                </fieldset>
                <div>
                    <Link to="/home">
                        <button>Submit</button>
                    </Link>

                    <Link to="/login">
                        <button className="account" type="button">Have an Account?</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;