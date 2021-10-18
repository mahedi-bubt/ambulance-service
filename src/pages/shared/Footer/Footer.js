import React from 'react';
import './Footer.css'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Footer = () => {
    const hrborder = {
        borderBottom: "2px solid #000000",
        width: "100px",
        margin: "auto"
    }
    const aboutHrBorder = {
        borderBottom: "1px solid #000000",
        width: "250px",
        margin: "0px"
    }

    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <h3>Ambulance Service</h3>
                        <p style={{ textAlign: "left" }}>Ambulance Service establish 2016. it is very popular Ambulance Service in Bangladesh </p>
                    </Col>
                    <Col>
                        <h3>About Hello</h3>
                        <hr style={hrborder} />
                        <Navbar>
                            <Nav style={{ display: "block" }}>
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">About Us</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Contact Us</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Site Map</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Privacy Policy</Nav.Link>
                                <hr style={aboutHrBorder} />
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col>
                        <h3>Services</h3>
                        <hr style={hrborder} />
                        <Navbar>
                            <Nav style={{ display: "block" }}>
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">Non-Ac Ambulance</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">AC Ambulance</Nav.Link>
                                <hr style={aboutHrBorder} />
                                <Nav.Link style={{ textAlign: "left", color: "white" }} href="">ICU Ambulance</Nav.Link>
                                <hr style={aboutHrBorder} />
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col>
                        <h3>Contact Info</h3>
                        <hr style={hrborder} />
                        <h6 style={{ textAlign: "left", paddingTop: "20px" }}>info@ambulance.com.bd</h6>
                        <h6 style={{ textAlign: "left" }}>Call Us: 017008880000</h6>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="footer-copy">
                    <small>&copy; Ambulance Service Ltd.All Rights Reserved</small>
                    <small>Developed By Mahedi</small>
                </div>
            </Container>
        </div>
    );
};

export default Footer;