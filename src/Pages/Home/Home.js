import React from 'react';
import Items from '../Items/Items';
import Banner from './Banner';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <div className='md:px-24'>
            <Banner></Banner>
            <Items></Items>
            <Summery></Summery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;