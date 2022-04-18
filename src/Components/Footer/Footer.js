import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer-section d-flex flex-column flex-lg-row justify-content-center p-3 p-lg-5' style={{ backgroundColor: "#122033", width: "100%" }}>
            <div>
                Copyright &copy; 2022,Visapress. All rights reserved.
            </div>
            <div className='d-flex d-lg-block justify-content-center justify-content-lg-end'>
                <Link to='#'>Terms of Use</Link>
                <span className='text-white'>|</span>
                <Link to='#'>Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;