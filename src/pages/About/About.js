import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container>
            <div>
                <h2 className="text-center title">About Us</h2>

                <p> Rio Ambulance is an online booking app to book an emergency ambulance, to transport the patient to a nearest hospital in the golden hour with just a click of a button.
                    Our objective is to bring price transparency and improve quality of healthcare services. At Meddco and meddco ambulance we provide a platform to help you find health solutions that are convenient and useful enough to continue for a longer time. Till date, we have had numerous users who have expressed gratitude and appreciation on our social media platforms for getting timely medical help. They were able to connect to the right doctors at affordable fees.
                </p>
            </div>
        </Container>
    );
};

export default About;