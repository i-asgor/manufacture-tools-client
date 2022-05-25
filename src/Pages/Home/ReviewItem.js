import React from 'react';

const ReviewItem = ({review}) => {
    return (
        <div className="card w-full lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>He is one of the tools manufacturing in Bangladesh. As a liberal businessman, expert in enhancing each product segment in local & international market. He devoted a great deal of energy and money to the cause of bringing about reconciliation between AA Tools and his partners.</p>
                <div className='flex items-center my-5'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={review.img}  alt=''/>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;