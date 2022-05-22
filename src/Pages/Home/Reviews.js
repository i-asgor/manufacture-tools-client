import React from 'react';
import ReviewItem from './ReviewItem';
import people1 from '../../images/testimonial/people1.png';
import people2 from '../../images/testimonial/people2.png';
import people3 from '../../images/testimonial/people3.png';

const Reviews = () => {
    const reviews =[
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                <h1 class="text-5xl font-bold">Testimonial</h1>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    reviews.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                }
            </div>
        </div>
    );
};

export default Reviews;