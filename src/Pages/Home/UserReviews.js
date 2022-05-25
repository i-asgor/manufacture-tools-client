import React from 'react';
import { useQuery } from 'react-query';
import UserSingleReview from './UserSingleReview';
import Loading from '../Shared/Loading';

const UserReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/reviews',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    // console.log(users)
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                <h1 class="text-5xl font-bold">Testimonial</h1>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    reviews.slice(-3).map(review => <UserSingleReview key={review._id} review={review}></UserSingleReview>)
                }
            </div>
        </div>
    );
};

export default UserReviews;