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
        // console.log(email, password);
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='px-24 flex flex-col justify-center items-center h-screen'>
            <form onSubmit={handleLoginForm} className="grid grid-cols-1 gap-5">
                <input type="email" ref={emailRef} placeholder="Enter email" required />
                <input type="password" ref={passwordRef} placeholder="Password" required />
                <input type="submit" value='Login' className='btn btn-primary' />
            </form>     
        </div>
    );
};

export default Login;