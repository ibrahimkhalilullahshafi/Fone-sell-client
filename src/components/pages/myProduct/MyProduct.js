import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authprovider/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const url = `https://a-12-server-five.vercel.app/myproducts?email=${user?.email}`;
    const { data: myProducts = [] } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>My Products</h1>
            <div className='my-4 w-3/4'>
                {
                    myProducts?.map(myProduct =>
                        <div key={myProduct._id} className="card card-side bg-base-100 border shadow-xl my-4">
                            <figure><img className='h-[200px] w-[200px]' src={myProduct.imageURL} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{myProduct.name}</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-[#323232] text-[#ff6507]">PAY NOW</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default MyProduct;