import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from "../../images/google.png";
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const GoogleLogin = () => {
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(loading){
        return <Loading></Loading>;
    }

    let customError;

    if (error) {
        customError=  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
    }

    

    if(user){
        navigate(from, {replace:true});
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