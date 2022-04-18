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
            <div>
                <h1 className='text-center mt-5' style={{ color: "#273C66" }}>VISA CATEGORIES</h1>
                <div style={{ padding: "50px 0px", margin: "0px" }} className='row row-cols-1 row-cols-lg-4 px-lg-5 px-2 services-container gap-3 gap-lg-0'>
                    {
                        services.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;