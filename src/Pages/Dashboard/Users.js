import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserData from './UserData';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://damp-taiga-65640.herokuapp.com/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    // console.log(users)
    
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>All USERS: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <UserData
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                            ></UserData>)
                        }                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;