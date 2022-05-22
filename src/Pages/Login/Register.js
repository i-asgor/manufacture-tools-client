import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password);

        if(user){
            navigate('/');
        }

    }
    return (
        <div class="hero max-h-screen bg-base-200">
        <div class="hero-content flex-col">
        <div class="text-center">
            <h1 class="text-5xl font-bold">Register now!</h1>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
            <div class="card-body">
            <div class="form-control">
                <label class="label">
                <span class="label-text">Name</span>
                </label>
                <input type="name" name='name' placeholder="name" class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label">
                <span class="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label">
                <span class="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" class="input input-bordered" />
                <label class="label">
                {/* <a href="#" class="label-text-alt link link-hover">Forgot password?</a> */}
                </label>
            </div>
            <div class="form-control mt-6">
                <button type='submit' class="btn btn-primary">Register</button>
            </div>
            </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Register;