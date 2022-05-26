import React from 'react';
import { ToastContainer } from 'react-toastify';

const OrderRow = ({purchase,index,refetch,setDeleteOrder}) => {
    const {quantity,userEmail}=purchase;

    return (
        <tr>
            <th>{index+1}</th>
            <td>{purchase.purchase}</td>
            <td>{userEmail}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeleteOrder(purchase)} for="delete-modal" className="btn btn-xs btn-error">Cancel</label>
                
            </td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default OrderRow;