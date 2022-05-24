import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const ManageOrder = () => {
    const {data:purchases, isLoading, refetch} = useQuery('purchases',()=>fetch('http://localhost:5000/purchase',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>;
    }
    // console.log(purchases)

    return (
        <div>
            <h2 className='text-2xl'>Manage Product: {purchases.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase,index) => <OrderRow
                            key={purchase._id}
                            index={index}
                            purchase={purchase}
                            refetch={refetch}
                            ></OrderRow>)
                        }                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;