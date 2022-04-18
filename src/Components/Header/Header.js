import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
// import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
        navigate('/')

    }
    return (
        <nav className='d-flex justify-content-between align-items-center header'>
            <div className='header-title'>
                <h2><span>VISA</span>PRESS</h2>
                <p>IMMIGRATION CONSULTING</p>
            </div>
            <div className='navbar-items'>
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/home#services'>Services</Link>
                <Link to='/about'>About</Link>
                {user ? <button onClick={handleLogout} className='btn-link'>Logout</button> : <Link style={{ color: "#273C66" }} to='/login'>Login</Link>}
            </div>
        </nav>
    );
};

export default Header;