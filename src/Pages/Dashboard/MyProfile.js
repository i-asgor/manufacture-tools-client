import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] =useAuthState(auth);
    console.log(user)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                
            </div>
        </div>
    );
};

export default MyProfile;