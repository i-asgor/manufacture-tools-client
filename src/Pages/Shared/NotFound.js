import React from 'react';
import err404 from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='h-screen px-24 py-5 flex justify-center items-center'>
             <img src={err404} alt="" className='w-50' />
        </div>
    );
};

export default NotFound;