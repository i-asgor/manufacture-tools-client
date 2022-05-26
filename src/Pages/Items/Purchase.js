import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit,reset } = useForm({mode: "onChange"});

    

    useEffect(()=>{
        const url = `https://damp-taiga-65640.herokuapp.com/manufacture/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setItem(data))
    },[id]);

    
    const onSubmit = event => {
        // event.preventDefault();
        // console.log(event.phone);

        const purchase = {
            purchasetId: item._id,
            purchase: item.name,
            quantity:event.product_quantity,
            price:item.price,
            userEmail:user.email,
            userName:user.displayName,
            phone_number: event.number,
            present_address: event.address,
        }
        console.log(purchase);

        fetch('https://damp-taiga-65640.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast.success(`Purchase Completed`);
                    reset();
                }
                else{
                    toast.error(`Purchase Failed`)
                }
            });
    }
    
    
    return (
        <div className='my-5 max-h-fill md:px-24'>
            <div className="flex flex-col md:flex-row w-full">
            <div className="grid max-h-fill flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="card w-96 bg-base-100 shadow-xl items-center">
                <figure className="px-10 pt-10">
                    <img src={item.picture} alt={item.name} className="rounded-xl w-screen" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p><span className='text-2xl text-bold'>Price:</span> {item.price}</p>
                    <p><span className='text-2xl text-bold'>Quantity: </span>{item.quantity}</p>
                    <p><span className='text-2xl text-bold'>Minimum Order Quantity: </span>{item.minimum_quantity}</p>
                    <p><span className='text-2xl text-bold'>Description:</span> {item.description}</p>
                </div>
            </div>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid max-h-fill flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>

                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        value={item.name} 
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("product_name")}
                    />
                    <label className="label">
                        {errors.product_name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product_name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Quantity</span>
                    </label>
                    <input
                        type="number"
                        className="input input-bordered w-full max-w-xs"
                        {...register("product_quantity",{required: true, min: `${item.minimum_quantity}`, max: `${item.quantity}` })}
                    />
                    {errors.product_quantity && errors.product_quantity.type === "required" && <span className='text-red-500'>Product Quantity is Required</span> }
                    {errors.product_quantity && errors.product_quantity.type === "min" && <span className='text-red-500'>Min length is {item.minimum_quantity}</span> }
                    {errors.product_quantity && errors.product_quantity.type === "max" && <span className='text-red-500'>Max length is {item.quantity}</span> }
                    <label className="label">
                        {errors.product_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product_quantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        value={user?.displayName || ''} 
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        value={user?.email || ''}
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email")}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
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
                                message: 'Phone is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
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
                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                    </label>
                </div>
                
                <input className='btn w-full max-w-xs text-white' type="submit" value="Purchased" />
                </form>
                
                <ToastContainer></ToastContainer>
                </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Purchase;