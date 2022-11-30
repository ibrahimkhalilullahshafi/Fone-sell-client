import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const productCollection = useLoaderData();
    console.log(productCollection);
    return (
        <div className='justify-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {productCollection.map(product =>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.imageURL} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;