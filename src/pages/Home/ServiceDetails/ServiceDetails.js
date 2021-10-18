import React from 'react';

const ServiceDetails = ({ service }) => {
    const { d_name, title, price, description, img } = service;
    return (
        <div>
            <h2>Service Details Page</h2>
            <image src={img} alt="" />
        </div>
    );
};

export default ServiceDetails;