import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/about')
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='form-container'>
                <h1 style={{ color: "#273C66", marginBottom: "30px" }} className='text-center'>Please Login</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id='email' required />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control mb-4" id='password' required />
                </div>
                <input className='login-button' type="submit" value="Login" />
                <div className='d-flex justify-content-center gap-2'>
                    <span>Haven't an account?</span><Link className='text-decoration-none fw-bold register-link' to='/register'>Creat new account</Link>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                    <div className='horizontal-line'></div>
                    <span>or</span>
                    <div className='horizontal-line'></div>
                </div>
            </form>
        </div>
    );
};

export default Login;