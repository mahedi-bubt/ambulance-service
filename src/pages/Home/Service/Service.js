import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = ({ service }) => {
    const { d_name, title, img } = service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} fluid />
                    <Card.Body>
                        <Card.Title >{d_name}</Card.Title>
                        <Card.Text> {title}</Card.Text>
                        <Button variant="outline-dark">See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;