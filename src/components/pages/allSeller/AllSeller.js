import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllSeller = () => {

    const allseller = useLoaderData();

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>All seller</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allseller.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default AllSeller;