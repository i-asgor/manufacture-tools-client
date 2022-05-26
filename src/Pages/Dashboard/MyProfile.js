import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] =useAuthState(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();
    // console.log(user)

    const onSubmit = (event) => {
        // event.preventDefault();
        // console.log(event);  
            const profile = {
              name: event.name,
              email: user.email,
              phone: event.number,
              address: event.address
            };
            fetch(`https://damp-taiga-65640.herokuapp.com/${user.email}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(profile),
            })
              .then((res) => res.json())
              .then((matchedCount) => {
                if (matchedCount) {
                  toast.success(`Profile updated Successfully`);
                  reset();
                } else {
                  toast.error(`Profile updated Failed`);
                }
              });
    
            console.log(profile);
      };

    return (
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={user.photoURL} alt={user.displayName} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>                
            </div>            
            <ToastContainer></ToastContainer>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1">
            
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
                />
                <label className="label">
                {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                    {errors.email.message}
                    </span>
                )}
                {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                    {errors.email.message}
                    </span>
                )}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input
                type="email"
                disabled
                value={user.email}
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email")}
                />
                <label className="label">
                {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                    {errors.email.message}
                    </span>
                )}
                {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                    {errors.email.message}
                    </span>
                )}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Phone</span>
                </label>
                <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
                {...register("number", {
                    required: {
                    value: true,
                    message: "Phone is Required",
                    },
                })}
                />
                <label className="label">
                {errors.number?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                    {errors.number.message}
                    </span>
                )}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Address</span>
                </label>
                <input
                type="text"
                placeholder="address"
                className="input input-bordered w-full max-w-xs"
                {...register("address")}
                />
                <label className="label">
                {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                    {errors.address.message}
                    </span>
                )}
                </label>
            </div>

            
            </div>
            <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Add"
            />
        </form>
        </div>
    );
};

export default MyProfile;