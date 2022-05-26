import React, { useEffect, useRef } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import GoogleLogin from './GoogleLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);

    useEffect(()=>{
        if(token){
            navigate(from, {replace: true})
        }
    },[token,from,navigate])

    if(loading){
        return <Loading></Loading>
    }

    let customError;

     if (error) {
        customError=  <div>
            <p className='text-error mx-5'>Error: {error.message}</p>
          </div>
    }
    

    const handleLoginForm = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email,password);
    }

    const resetPassword = () => {
        const email = emailRef.current.value;
        // console.log(email)
        if(email){
            sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast.error('Please Enter Your Email')
        }
    }

    return (
        
        <div className="hero max-h-screen bg-base-200">
        <div className="hero-content flex-col">
        <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginForm}>
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input type="email" ref={emailRef} placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input type="password" ref={passwordRef} placeholder="password" className="input input-bordered" />
                <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                </label>
            </div>
            <div className="form-control mt-2">
                <button type='submit' className="btn btn-primary">Login</button>
            </div>
            </div>
            </form>
            {customError}
            <p className='mx-auto my-2 px-5'>New to Manufacture?<Link to='/register' className="label-text-alt link link-hover ml-2 text-xl text-primary">Register</Link></p>
            <p className='mx-auto my-2 px-5'>Forget Your Password?<button onClick={resetPassword} className="label-text-alt link link-hover ml-2 text-xl text-primary">Reset password?</button></p>
            <div className="divider px-5">OR</div>
            <GoogleLogin></GoogleLogin>
            <ToastContainer/>
        </div>
        </div>
        </div>
    );
};

export default Login;