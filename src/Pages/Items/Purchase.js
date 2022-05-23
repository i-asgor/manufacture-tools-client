import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/manufacture/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setItem(data))
    },[id])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        let newItem;
        if(data.quantity > 0){
            newItem = parseInt(item.quantity) + parseInt(data.quantity); 
        }       
        // console.log(newItem, item.quantity, data.quantity)
        
        data = {'quantity':newItem};
        const {quantity,...rest} = item;
        const updateItem = {...data, ...rest}
        setItem(updateItem);
        const url = `http://localhost:5000/manufacture/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(output => {
            // console.log(output);
            // setQuantity(output);
            window.alert("quantity Updated Successfully!!");
        });
    }
    
    
    return (
        <div className='my-5 max-h-screen md:px-24'>
            <div class="card md:flex-row w-full bg-base-100 shadow-xl items-center">
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
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                        <input type="submit" className='btn btn-sm btn-primary' value="+" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;