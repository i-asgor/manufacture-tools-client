import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';
import GoogleLogin from './GoogleLogin';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const [token] = useToken(user);

    if(loading ||updating){
        return <Loading></Loading>
    }

    let customError;

     if (error ||error1) {
        customError=  <div>
            <p className='text-error mx-5'>Error: {error.message}</p>
          </div>
    }

    if(token){
        navigate('/home')
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name})
        console.log('update done')

    }
    return (
        <div className="hero max-h-screen bg-base-200">
            <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
                {customError}
                <p className='mx-auto my-2'>Already Have an Account?<Link to='/Login' className="label-text-alt link link-hover ml-2 text-xl text-primary">Login</Link></p>
                <div className="divider px-5">OR</div>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
        </div>
    );
};

export default Register;