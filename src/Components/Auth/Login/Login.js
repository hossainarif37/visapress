import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div>
            <form className='form-container'>
                <h1 style={{ color: "#273C66", marginBottom: "30px" }} className='text-center'>Please Login</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id='email' required />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control mb-4" id='password' required />
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