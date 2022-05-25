import React from 'react';
import CustomItem from '../../Hooks/CustomItem';
import Item from './Item';

const Items = () => {
    const [items] = CustomItem([]);
    
    return (
        <div>
             <h1 className="text-5xl font-bold mx-2">Manufacture Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    items.slice(0,6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;