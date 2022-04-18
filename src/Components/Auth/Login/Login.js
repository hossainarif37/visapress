import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import googleLogo from '../../../Images/logo/google.png'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from 'firebase/auth';
const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",

    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",

    });

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }
    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Please enter minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoad, googleError] = useSignInWithGoogle(auth);
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true })
        }
    }, [user, googleUser])


    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, userInfo.email)
            .then(() => {
                toast('Email sent')
            })
    }

    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleLogin} >
                    <h1 style={{ color: "#273C66", marginBottom: "30px" }} className='text-center'>Please Login</h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={handleEmail} type="email" className="form-control" id='email' required />

                    </div>
                    <p className='error-message'>{errors.email}</p>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={handlePassword} type="password" className="form-control mb-4" id='password' required />
                    </div>
                    <p className='error-message'>{errors.password}</p>
                    <input className='login-button' type="submit" value="Login" />

                    <ToastContainer></ToastContainer>
                </form>
                <button onClick={handlePasswordReset} className='btn-link border-0 bg-white'>Reset Password?</button>
                <div className='d-flex justify-content-center gap-2'>
                    <span>Haven't an account?</span><Link className='text-decoration-none fw-bold register-link' to='/register'>Creat new account</Link>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2 mb-2'>
                    <div className='horizontal-line'></div>
                    <span>or</span>
                    <div className='horizontal-line'></div>
                </div>
                <button onClick={() => signInWithGoogle()} className='d-flex justify-content-center py-2 gap-3 align-items-center w-100 google-button'>
                    <img style={{ width: "25px", height: "25px" }} src={googleLogo} alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;