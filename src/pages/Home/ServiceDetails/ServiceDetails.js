import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { s_id } = useParams();

    const [data, setData] = useState([]);
    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    /* const item = data?.filter(service => service?.id == s_id);
    console.log(item) */

    useEffect(() => {
        const item = data?.find(service => service.id == s_id);
        setServiceDetails(item);
    }, [data])

    return (
        <div>
            <h1 className="text-center heading">Service Details</h1>
            <div className="service-details">
                <div className="image">
                    <img src={serviceDetails?.img} alt="" />
                </div>
                <div className="details">
                    <h2 className="text-center mb-3">{serviceDetails?.d_name}</h2>
                    <h4 className="text-center mb-3">{serviceDetails?.title}</h4>
                    <p>{serviceDetails?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;