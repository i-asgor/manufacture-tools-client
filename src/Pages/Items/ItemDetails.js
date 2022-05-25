import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `https://damp-taiga-65640.herokuapp.com/manufacture/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setItem(data))
    },[id])

    return (
        <div className='my-5 max-h-screen md:px-24'>
            <div className="card md:flex-row w-full bg-base-100 shadow-xl items-center">
            <figure className="px-10 pt-10">
                <img src={item.picture} alt={item.name} className="rounded-xl w-screen" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p><span className='text-2xl text-bold'>Price:</span> {item.price}</p>
                <p><span className='text-2xl text-bold'>Quantity: </span>{item.quantity}</p>
                <p><span className='text-2xl text-bold'>Supplier Name:</span> {item.supplier_name}</p>
                <p><span className='text-2xl text-bold'>Description:</span> {item.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ItemDetails;