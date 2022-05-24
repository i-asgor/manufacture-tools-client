import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    

    useEffect(()=>{
        const url = `http://localhost:5000/manufacture/${id}`;
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
            quantity:item.quantity,
            userEmail:user.email,
            userName:user.displayName,
            phone_number: event.number,
            present_address: event.address,
        }
        console.log(purchase);

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Purchase Completed`)
                }
                else{
                    toast.error(`Purchase Failed`)
                }
            });
    }
    
    
    return (
        <div className='my-5 max-h-fill md:px-24'>
            <div class="flex flex-col md:flex-row w-full">
            <div class="grid max-h-fill flex-grow card bg-base-300 rounded-box place-items-center">
            <div class="card w-96 bg-base-100 shadow-xl items-center">
                <figure class="px-10 pt-10">
                    <img src={item.picture} alt={item.name} class="rounded-xl w-screen" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{item.name}</h2>
                    <p><span className='text-2xl text-bold'>Price:</span> {item.price}</p>
                    <p><span className='text-2xl text-bold'>Quantity: </span>{item.quantity}</p>
                    <p><span className='text-2xl text-bold'>Supplier Name:</span> {item.supplier_name}</p>
                    <p><span className='text-2xl text-bold'>Description:</span> {item.description}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>
            <div class="divider divider-horizontal">OR</div>
            <div class="grid max-h-fill flex-grow card bg-base-300 rounded-box place-items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
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
                        type="text"
                        value={item.quantity}
                        className="input input-bordered w-full max-w-xs"
                        {...register("product_quantity", {
                            required: {
                                value: true,
                                message: 'Product Quantity is Required'
                            }
                        })}
                    />
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
                </div>
                <ToastContainer></ToastContainer>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Purchase;