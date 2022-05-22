import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import GoogleLogin from './GoogleLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if(loading){
        return <Loading></Loading>
    }

    let customError;

     if (error) {
        customError=  <div>
            <p className='text-error mx-5'>Error: {error.message}</p>
          </div>
    }


    if(user){
        navigate('/');
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
        
        <div class="hero max-h-screen bg-base-200">
        <div class="hero-content flex-col">
        <div class="text-center">
            <h1 class="text-5xl font-bold">Login now!</h1>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginForm}>
            <div class="card-body">
            <div class="form-control">
                <label class="label">
                <span class="label-text">Email</span>
                </label>
                <input type="email" ref={emailRef} placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label">
                <span class="label-text">Password</span>
                </label>
                <input type="password" ref={passwordRef} placeholder="password" class="input input-bordered" />
                <label class="label">
                {/* <a href="#" class="label-text-alt link link-hover">Forgot password?</a> */}
                </label>
            </div>
            <div class="form-control mt-2">
                <button type='submit' class="btn btn-primary">Login</button>
            </div>
            </div>
            </form>
            {customError}
            <p className='mx-auto my-2 px-5'>Already Have an Account?<Link to='/register' class="label-text-alt link link-hover ml-2 text-xl text-primary">Register</Link></p>
            <p className='mx-auto my-2 px-5'>Forget Your Password?<button onClick={resetPassword} class="label-text-alt link link-hover ml-2 text-xl text-primary">Reset password?</button></p>
            <div class="divider px-5">OR</div>
            <GoogleLogin></GoogleLogin>
            <ToastContainer/>
        </div>
        </div>
        </div>
    );
};

export default Login;