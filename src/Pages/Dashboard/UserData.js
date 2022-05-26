import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserData = ({user,index,refetch}) => {
    const {email,role} =user;
    const makeAdmin = () => {
        fetch(`https://damp-taiga-65640.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed! You are not a admin');
            }
            return res.json()
        })
        .then(data =>{
            if(data.modifiedCount > 0){
                refetch();
                toast.success(`Successfully made admin`);
            }
        })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{user.email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>
                }
            </td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default UserData;