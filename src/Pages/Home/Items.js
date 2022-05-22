import React from 'react';
import Item from './Item';

const Items = () => {
    return (
        <div>
             <h1 class="text-5xl font-bold">Manufacture Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            </div>
        </div>
    );
};

export default Items;