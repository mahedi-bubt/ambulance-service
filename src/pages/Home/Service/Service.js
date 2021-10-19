import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { d_name, title, img } = service;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} fluid="true" />
                    <Card.Body>
                        <Card.Title className="text-center">{d_name}</Card.Title>
                        <Card.Text className="text-center"> {title}</Card.Text>
                        <Link to={`/servicedetails/${service?.id}`}>
                            <Button variant="outline-dark">See Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;