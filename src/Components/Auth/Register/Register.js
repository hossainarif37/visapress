import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div>
            <form className='form-container'>
                <h2 style={{ color: "#273C66", marginBottom: "20px" }} className='text-center'>Please Register</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id='email' required />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id='password' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="ConfirmPass" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control mb-4" id='ConfirmPass' required />
                </div>
                <input className='login-button' type="submit" value="Submit" />
                <div className='d-flex justify-content-center gap-2'>
                    <span>Aready have an account?</span><Link className='text-decoration-none register-link fw-bolder' to='/login' id='login-link'>Login</Link>
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

export default Register;