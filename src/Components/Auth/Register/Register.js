import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import googleLogo from '../../../Images/logo/google.png';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
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

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };
    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        signInWithGoogle,
        googleUser,
        googleLoad,
        googleError
    ] = useSignInWithGoogle(auth);

    const handleRegister = (e) => {
        e.preventDefault();
        if (!errors.password) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }
        else {
            toast("Confirm password didn't match");
        }
    }



    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || googleUser) {
            navigate(from)
        }
    }, [user, googleUser])
    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);

    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleRegister}>
                    <h2 style={{ color: "#273C66", marginBottom: "20px" }} className='text-center'>Please Register</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={handleEmailChange} type="email" className="form-control" id='email' required />
                        {errors?.email && <p className="text-danger">{errors.email}</p>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={handlePasswordChange} type="password" className="form-control" id='password' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ConfirmPass" className="form-label">Confirm Password</label>
                        <input onChange={handleConfirmPasswordChange} type="password" className="form-control mb-4" id='ConfirmPass' required />
                    </div>
                    {errors?.password && <p className="text-danger">{errors.password}</p>}
                    <input className='login-button' type="submit" value="Submit" />
                    <ToastContainer></ToastContainer>
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