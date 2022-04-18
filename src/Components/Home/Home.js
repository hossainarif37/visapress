import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Slider></Slider>
            <div style={{ padding: "50px 80px", margin: "0px" }} className='row row-cols-1 row-cols-lg-4'>
                {
                    services.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Home;