import React from 'react';
import Banner from './Banner';
import Items from './Items';

const Home = () => {
    return (
        <div className='px-24'>
            <Banner></Banner>
            <Items></Items>
        </div>
    );
};

export default Home;