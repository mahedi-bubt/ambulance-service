import React from 'react';
import { Container } from 'react-bootstrap';
import './Charges.css'

const Charges = () => {
    return (
        <Container>
            <div>
                <h2 className="title">Rio Charges</h2>
                <p>The Meddco Ambulance Assistance app is India’s first ambulance app with GPS based real-time booking ambulance at affordable prices and providing 24x7 medical emergency services.
                    <br />
                    The Meddco Ambulance Assistance app not only helps the patient during emergency medical conditions but also help book ambulance services to the patients who need frequent or monthly hospital visits for dialysis, monthly body check-up after any major surgeries, physiotherapy, handicapped patients, etc. The role of the first responder is to provide basic life support and advanced life support to the patient until they reach the nearby hospital.

                    We are providing five types of ambulance services (Basic ambulance, Cardiac ambulance, Neonatal ambulance, Patient transport ambulance, and Mortuary ambulance also called Hearse van) all over India at affordable prices.
                    <br />
                    The Meddco ambulance charges may vary due to the ongoing impact of the pandemic, as the COVID-19 outbreak continues to generate a surge in ambulance rates. Before booking the ambulance kindly check for updated ambulance rates. We apologize for any inconvenience this may cause and appreciate your patience.
                    <br />
                    What Is Minimum Assurance Km Covered?
                    Minimum Assurance KM covered is the minimum charge which the ambulance service provider would charge. The confirmed rates are the minimum charges for which the ambulance service provider would cover minimum km (varies as per the type of ambulance) and over and above the minimum km the PER KM Rates would be applicable as provided above.
                    <br />
                    What Is Ambulance Rate Per KM?
                    The ambulance rate per km is the rate that would be charged over and above the minimum km. Please refer to the below example to understand the calculation of the charges:
                    <br />
                    Example - If the patient family chooses Basic ambulance service and cover a 12km then the charges would be calculated are as follow:
                    <br />
                    Minimum charges = 500 (for first 10 km)
                    <br />
                    Additional charges Next 2 km @ Rs 30 = 60
                    <br />
                    Even if the ambulance covers less than 10km then the charges would be Rs. 500.
                    <br />
                    What is the waiting rate per hour?
                    It is the charges when the ambulance had to wait until the patient is on boarded and starts the vehicle towards the hospital. The waiting charges would vary depending on the type of ambulance service which is mentioned in our rate chart.</p>
            </div>
        </Container>
    );
};

export default Charges;