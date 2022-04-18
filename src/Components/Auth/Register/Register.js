import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import googleLogo from '../../../Images/logo/google.png';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoad, googleError] = useSignInWithGoogle(auth);
    const handleRegister = (e) => {
        e.preventDefault();
        if (password === confirmPass) {
            createUserWithEmailAndPassword(email, password);
        }
        else {
            setError("Didn't matched confirm password!")
        }


    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    console.log(hookError);
    useEffect(() => {
        if (user || googleUser) {
            navigate(from)
        }
    }, [user, googleUser])

    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleRegister}>
                    <h2 style={{ color: "#273C66", marginBottom: "20px" }} className='text-center'>Please Register</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id='email' required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id='password' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ConfirmPass" className="form-label">Confirm Password</label>
                        <input onChange={e => setConfirmPass(e.target.value)} type="password" className="form-control mb-4" id='ConfirmPass' required />
                    </div>
                    <p className='text-danger text-center'>{error}</p>
                    <input className='login-button' type="submit" value="Submit" />
                    <p className='text-danger'>{hookError}</p>
                    <div className='d-flex justify-content-center gap-2'>
                        <span>Aready have an account?</span><Link className='text-decoration-none register-link fw-bolder' to='/login' id='login-link'>Login</Link>
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

export default Register;