
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllBuyer = () => {

    const allbuyer = useLoaderData();

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>All Buyer</h1>
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
                            allbuyer.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyer;