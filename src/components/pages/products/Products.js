import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyingModal from '../buyingModal/BuyingModal';
import Product from './product/Product';

const Products = () => {
    const productCollection = useLoaderData();
    const [buy, setBuy] = useState({});



    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>Products</h1>
            <div className='justify-center grid gap-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    productCollection.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                            setBuy={setBuy}
                        ></Product>)
                }
            </div>
            <BuyingModal
                key={buy._id}
                buy={buy}
            ></BuyingModal>

        </div>
    );
};

export default Products;