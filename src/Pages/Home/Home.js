import React from 'react';
import Banner from './Banner';
import Items from './Items';
import Summery from './Summery';

const Home = () => {
    return (
        <div className='px-24'>
            <Banner></Banner>
            <Items></Items>
            <Summery></Summery>
        </div>
    );
};

export default Home;