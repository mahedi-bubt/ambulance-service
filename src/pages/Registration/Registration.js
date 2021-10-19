import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Registration.css';

const Registration = () => {
    const { createUser } = useAuth();

    /* const [username, setUsername] = useState(''); */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = (e) => {
        console.log(email, password)
        e.preventDefault();
    }
    const emailPasswordSingUp = () => {
        createUser()
            .then(result => {
                console.log(result);
            })
    }

    /* const handleUserName = (e) => {
        setUsername(e.target.value)
    } */

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className=" form">
            <form onSubmit={handleRegistration}>
                <h2>Sign Up!</h2>
                <fieldset>
                    <legend>Create Account</legend>
                    <ul>
                        {/* <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" onChange={handleUserName} id="username" required />
                        </li> */}
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
                <button onClick={emailPasswordSingUp}>Submit</button>
                <Link to="/login">
                    <button className="account" type="button">Have an Account?</button>
                </Link>
            </form>
        </div>
    );
};

export default Registration;