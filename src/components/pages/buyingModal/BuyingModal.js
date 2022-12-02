import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authprovider/AuthProvider';

const BuyingModal = ({ buy }) => {
    const { user } = useContext(AuthContext);


    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/myorders';

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.meetingLocation.value;

        const order = {
            image: buy.imageURL,
            orderName: buy.name,
            sellerName: buy.sellerName,
            sellerLocation: buy.location,
            sellingPrice: buy.resalePrice,
            buyersName: name,
            buyersEmail: email,
            buyersPhone: phone,
            buyersLocation: location,
        }

        fetch('https://a-12-server-five.vercel.app/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('order data', data);
                if (data.acknowledged) {
                    toast.success('order confirmed')
                    navigate(from, { replace: true });
                }

            })
    }


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
                    <form onSubmit={handleOrder} action="" className='form-control w-full'>
                        <span className="font-bold">Name:</span>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-sm rounded-lg input-bordered w-full my-0" />
                        <span className="font-bold">Email:</span>
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Your email" className="input input-sm rounded-lg input-bordered w-full my-0" />
                        <span className="font-bold">Phone:</span>
                        <input name="phone" type="text" placeholder="Your Phone Number" className="input input-sm rounded-lg input-bordered w-full my-0" />
                        <span className="font-bold">Meeting Location:</span>
                        <input name="meetingLocation" type="text" placeholder="Your meeting location" className="input input-sm rounded-lg input-bordered w-full my-0" />
                        <input type="submit" value="Submit" className="btn btn-primary bg-[#323232] text-[#ff6507] btn-sm rounded-lg w-full mt-3" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyingModal;