import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer-section d-flex justify-content-center' style={{ backgroundColor: "#122033", width: "100%", padding: "30px 0" }}>
            Copyright &copy; 2022,Visapress. All rights reserved.
            <Link to='#'>Terms of Use</Link>
            <span className='text-white'>|</span>
            <Link to='#'>Privacy Policy</Link>
        </footer>
    );
};

export default Footer;