import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'

const Services = ({ service }) => {
    const navigate = useNavigate();
    const handleMoreDetails = () => {
        navigate('/checkout')
    }
    const { name, price, image, description } = service;
    return (
        <div className='col'>
            <div className="card">
                <div className='p-2'>
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h4 style={{ color: "#273C66" }} className="card-title">{name}</h4>
                    <h5 className='card-text mb-3'>Price: {price} BDT</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={handleMoreDetails} className="service-button">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;