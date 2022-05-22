import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

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


    if(user){
        navigate('/');
    }
    

    const handleLoginForm = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email,password);
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
            <div class="form-control mt-6">
                <button type='submit' class="btn btn-primary">Login</button>
            </div>
            </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Login;