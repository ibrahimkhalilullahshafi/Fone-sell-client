import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authprovider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/orders?email=${user?.email}`;
    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>My Orders</h1>
            <div>
                {
                    orders?.map(order =>
                        <div key={order._id} className="card card-side bg-base-100 shadow-xl">
                            <figure><img className='h-[200px] w-[200px]' src={order.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <span className="label-text font-bold">Product Name:</span>
                                <p className="card-title">{order.orderName}</p>
                                <span className="label-text font-bold">Product Name:</span>
                                <p>{order.sellingPrice}=/</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-[#323232] text-[#ff6507]">PAY NOW</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;