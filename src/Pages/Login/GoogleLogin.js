import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from "../../images/google.png";
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';

const GoogleLogin = () => {
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);

    useEffect(()=>{
        if(token){
            navigate(from, {replace: true})
        }
    },[token,from,navigate])

    if(loading){
        return <Loading></Loading>;
    }

    let customError;

    if (error) {
        customError=  <div>
            <p className='text-error'>Error: {error.message}</p>
          </div>
    }

    return (
        <div className='flex flex-col justify-center items-center mx-5'>
            {customError}
            <button onClick={()=> signInWithGoogle()} class="btn btn-outline btn-primary mb-5">
                <img style={{width: '30px'}} src={google} alt="" />
                <span className='ml-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default GoogleLogin;