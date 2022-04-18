import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import googleLogo from '../../../Images/logo/google.png'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoad, googleError] = useSignInWithGoogle(auth);
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true })
        }
    }, [user, googleUser])




    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleLogin} >
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
                    <div className='d-flex align-items-center justify-content-center gap-2 mb-2'>
                        <div className='horizontal-line'></div>
                        <span>or</span>
                        <div className='horizontal-line'></div>
                    </div>
                </form>
                <button onClick={() => signInWithGoogle()} className='d-flex justify-content-center py-2 gap-3 align-items-center w-100 google-button'>
                    <img style={{ width: "25px", height: "25px" }} src={googleLogo} alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;