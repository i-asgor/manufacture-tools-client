import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] =useAuthState(auth);
    console.log(user)
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={user.photoURL} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                
            </div>
        </div>
    );
};

export default MyProfile;