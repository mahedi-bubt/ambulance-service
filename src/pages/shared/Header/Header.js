import React from 'react';
import './Header.css'
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">RIO AMBULANCE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navbar-link">
                            <HashLink className="nav-link" to="/home#home">Home</HashLink>
                            <HashLink className="nav-link" to="/home#services">Services</HashLink>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/charges">RIO Charges</Link>
                            <HashLink className="nav-link" to="/home#contact">Contact</HashLink>
                            <HashLink className="nav-link" to="/home#offer">Offer</HashLink>
                        </Nav>
                        {
                            user?.email ?
                                <Link to="/home">
                                    <button onClick={logOut} className="btn btn-dark">SignOut</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-dark">LogIn</button>
                                </Link>
                        }
                        <span className="nav-link">{user?.displayName}</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Carousel */}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/K9gppLQ/banner-01.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/mb1hpC2/bannner-02.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tbJbH6f/banner-03.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Header;