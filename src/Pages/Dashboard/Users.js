import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserData from './UserData';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
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
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            key={user._i}
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