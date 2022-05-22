import React from 'react';

const ReviewItem = ({review}) => {
    return (
        <div class="card w-full lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='flex items-center my-5'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
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