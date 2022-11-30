import React from 'react';

const BuyingModal = ({ buy }) => {
    return (
        <>
            <input type="checkbox" id="buying-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={buy.imageURL} alt="" />
                    <h3 className="text-lg font-bold">{buy.name}</h3>
                    <p><span className='font-bold'>Seller:</span> {buy.sellerName}</p>
                    <p><span className='font-bold'>Seller Location:</span> {buy.location}</p>
                    <p><span className='font-bold'>Resale Price:</span> {buy.resalePrice}</p>
                    <form action="" className='form-control w-full'>
                        <input type="text" placeholder="Your Phone Number" className="input input-sm input-bordered w-full my-4" />
                        <input type="submit" value="Submit" className="btn btn-primary btn-sm rounded-lg w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyingModal;