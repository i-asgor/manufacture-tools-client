import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const OrderRow = ({purchase,index,refetch}) => {
    const {quantity,userEmail}=purchase;
    // console.log(purchase)
    
    const handleDelete = email => {

        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            fetch(`http://localhost:5000/purchase/${email}`,{
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.deletedCount){
                toast.success(`Product ${purchase.purchase} is Deleted`)
                refetch();
            }
        })
        }
        
    }

    return (
        <tr>
            <th>{index+1}</th>
            <td>{purchase.purchase}</td>
            <td>{userEmail}</td>
            <td>{quantity}</td>
            <td><button onClick={()=>handleDelete(userEmail)} className='btn btn-xs btn-error'>Delete</button></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default OrderRow;