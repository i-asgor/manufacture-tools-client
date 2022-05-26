import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {loadStripe} from '@stripe/stripe-js';
import {  Elements  } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L3PNDG3VBRgp3UFSN8gvaGdoZ5Bepl5kD22FkZHVHtVCcJyrUhudU8IajcayQAFZJjlLYhUkP2ntoNWUHUT86oU00mLsvTnuZ');

const Payment = () => {
    const {id} = useParams();  

    const url = `http://localhost:5000/purchase/${id}`;

    const { data: purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    // console.log(purchase)

    if(isLoading){
        return <Loading></Loading>;
    }

    return (
            <div>
                <div className="card max-w-md bg-base-100 shadow-xl my-16">
                    <div className="card-body">
                        <h2 className="card-title">Pay For: {purchase.purchase}</h2>
                        <p>please Pay: {purchase.price}</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm purchase={purchase} />
                    </Elements>
                    </div>
                </div>
            </div>
    );
};

export default Payment;