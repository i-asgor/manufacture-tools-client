import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [purchase, setPurchase] = useState([]);
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://damp-taiga-65640.herokuapp.com/purchases/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        Navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setPurchase(data);
                });
        }
    }, [user])

    return (
        <div>
        <h2>My Order: {purchase.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>quantity</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchase.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.purchase}</td>
                            <td>{a.quantity}</td>
                            <td>{a.userEmail}</td>
                            <td>{a.phone_number}</td>
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;