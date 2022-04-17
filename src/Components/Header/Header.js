import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='d-flex justify-content-between align-items-center header'>
            <div className='header-title'>
                <h2><span>VISA</span>PRESS</h2>
                <p>IMMIGRATION CONSULTING</p>
            </div>
            <div className='navbar-items'>
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/services'>Services</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
};

export default Header;