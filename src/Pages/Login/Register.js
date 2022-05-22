import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    if(loading){
        return <Loading></Loading>
    }

    let customError;

     if (error) {
        customError=  <div>
            <p className='text-error mx-5'>Error: {error.message}</p>
          </div>
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password);

        if(user){
            navigate('/home');
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
                            <Link to='' class="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div class="form-control mt-2">
                            <button type='submit' class="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
                {customError}
                <p className='mx-auto my-2'>New to Manufacture?<Link to='/Login' class="label-text-alt link link-hover ml-2 text-xl text-primary">Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Register;