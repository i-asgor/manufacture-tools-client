import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const {data:products, isLoading, refetch} = useQuery('products',()=>fetch('https://damp-taiga-65640.herokuapp.com/products',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>;
    }
    console.log(products)

    return (
        <div>
            <h2 className='text-2xl'>Manage Product: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,index) => <ProductRow
                            key={product._id}
                            index={index}
                            product={product}
                            refetch={refetch}
                            ></ProductRow>)
                        }                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;