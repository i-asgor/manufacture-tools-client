import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const navigate = useNavigate();
    const {_id, name, picture, price, description, quantity, minimum_quantity} = item;

    const itemDetailNavigate = id => {
        navigate(`/manufacture/${id}`);
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='text-2xl text-bold'>Price:</span> {price}</p>
                <p><span className='text-2xl text-bold'>Quantity: </span>{quantity}</p>
                <p><span className='text-2xl text-bold'>Minimum Order Quantity:</span> {minimum_quantity}</p>
                <p><span className='text-2xl text-bold'>Description:</span> {description?.slice(0,100) + "............."}</p>
                <div className="card-actions">
                <button onClick={()=>itemDetailNavigate(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Item;