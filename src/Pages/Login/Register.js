import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);

        if(user){
            Navigate('/');
        }

    }
    return (
        <div className='px-24 flex flex-col justify-center items-center h-screen'>
            <form onSubmit={handleRegister} className="grid grid-cols-1 gap-5">
                <input type="text" name='name' placeholder="Enter Your Name" class="input input-bordered w-full max-w-lg" required />
                <input type="email" name='email' placeholder="Enter Your Email" class="input input-bordered w-full max-w-lg" required />
                <input type="password" name='password' placeholder="Enter Your Password" class="input input-bordered w-full max-w-lg" required />
                <input type="submit" value='Register' className='btn btn-primary' />
            </form>     
        </div>
    );
};

export default Register;