import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
// import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
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
                <Link to='/services'>Services</Link>
                <Link to='/about'>About</Link>
                {user ? <button onClick={handleLogout} className='btn btn-light'>Logout</button> : <Link to='/login'>Login</Link>}
            </div>
        </nav>
    );
};

export default Header;