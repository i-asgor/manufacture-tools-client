import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ProductRow = ({product,index,refetch}) => {
    const {name, picture,price,quantity, email}=product;
    
    const handleDelete = email => {

        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            fetch(`http://localhost:5000/products/${email}`,{
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success(`Product ${product.name} is Deleted`)
                refetch();
            }
        })
        }
        
    }

    return (
        <tr>
            <th>{index+1}</th>
            <th>
            <div class="avatar">
                <div class="w-16 rounded-full">
                    <img src={picture} alt={name} />
                </div>
            </div>
            </th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={()=>handleDelete(email)} className='btn btn-xs btn-error'>Delete</button></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default ProductRow;