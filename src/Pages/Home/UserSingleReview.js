import React from 'react';


const UserSingleReview = ({review}) => {
    return (
        <div class="card w-full lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.description}</p>
                <div className='flex items-center my-5'>
                    <div>
                        <h4 className='text-xl'>Rating: {review.rating}</h4>
                    </div>
                </div>
                <div class="rating">
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                </div>
            </div>
        </div>
    );
};

export default UserSingleReview;