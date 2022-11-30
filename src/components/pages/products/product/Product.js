import React from 'react';

const Product = ({ product, setBuy }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={product.imageURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p><span className='font-bold'>Seller:</span> {product.sellerName}</p>
                <p><span className='font-bold'>Location:</span> {product.location}</p>
                <p><span className='font-bold'>Posted time:</span> {product.postedTime}</p>
                <p><span className='font-bold'>Description: </span>{product.description}</p>
                <p><span className='font-bold'>Used time:</span> {product.usedTime}</p>
                <p><span className='font-bold'>Original Price:</span> {product.originalPrice}</p>
                <p><span className='font-bold'>Resale Price:</span> {product.resalePrice}</p>
                <div className="card-actions justify-center">
                    <label htmlFor="buying-modal" className="btn btn-primary w-full" onClick={() => setBuy(product)}>Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;