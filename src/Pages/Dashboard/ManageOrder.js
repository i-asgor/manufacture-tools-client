import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import OrderRow from './OrderRow';

const ManageOrder = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)

    const {data:purchases, isLoading, refetch} = useQuery('purchases',()=>fetch('https://damp-taiga-65640.herokuapp.com/order',{
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
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            setDeleteOrder={setDeleteOrder}
                            ></OrderRow>)
                        }                    
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteConfirmationModal
            deleteOrder={deleteOrder}
            refetch={refetch}
            setDeleteOrder={setDeleteOrder}
            ></DeleteConfirmationModal>}
        </div>
    );
};

export default ManageOrder;