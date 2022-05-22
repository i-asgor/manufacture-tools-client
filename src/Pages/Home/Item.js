import React from 'react';

const Item = ({item}) => {
    const {_id, name, picture, price, description, quantity, supplier_name} = item;
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={picture} alt={name} class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p><span className='text-2xl text-bold'>Price:</span> {price}</p>
                <p><span className='text-2xl text-bold'>Quantity: </span>{quantity}</p>
                <p><span className='text-2xl text-bold'>Supplier Name:</span> {supplier_name}</p>
                <p><span className='text-2xl text-bold'>Description:</span> {description.slice(0,100) + "............."}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Item;