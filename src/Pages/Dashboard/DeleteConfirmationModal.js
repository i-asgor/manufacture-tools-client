import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({deleteOrder,refetch,setDeleteOrder}) => {
    const {purchase,userEmail} =deleteOrder;
    // console.log(deleteOrder)
    const handleDelete = email => {
            fetch(`https://damp-taiga-65640.herokuapp.com/purchase/${email}`,{
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.deletedCount){
                toast.success(`Product ${purchase} is Deleted`)
                setDeleteOrder(null);
                refetch();
            }
        })
        
    }
    return (
        
        <div> 
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are You sure You want to Delete: {purchase}</h3>
                <div className="modal-action">
                <button onClick={()=>handleDelete(userEmail)} className='btn btn-xs btn-error'>Delete</button>
                <label for="delete-modal" className="btn btn-xs btn-error">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;