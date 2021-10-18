import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    console.log(services);

    const style = {
        services_container: {
            marginTop: "70px"
        },
        servicesTop: {
            marginBottom: "50px"
        },
        hr: {
            borderBottom: "1px solid black",
            margin: "auto",
            width: "250px"
        }
    }

    return (
        <div>
            <Container style={style.services_container}>
                <div style={style.servicesTop}>
                    <h2 className="text-primary">Our all Services</h2>
                    <hr style={style.hr} />
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key='id'
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;