import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authprovider/AuthProvider';
import Loading from '../loading/loading';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const { user } = useContext(AuthContext);

    const imageHostKey = process.env.REACT_APP_imgbb_api;

    const today = new Date();

    const formattedDate = format(today, 'PPPP');

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/myproducts';




    const handleProductInfo = (data) => {
        console.log(data);
        const getName = document.getElementById("categoryName");
        const categoryss = getName.options[getName.selectedIndex].text;
        console.log(categoryss);
        const image = data.imageURL[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url)
                    const addProductInfo = {
                        categoryId: data.category,
                        name: data.name,
                        category: data.categorycategoryss,
                        sellerName: data.sellerName,
                        postedTime: formattedDate,
                        usedTime: data.usedTime,
                        description: data.description,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        imageURL: imgData.data.url,
                        location: data.location,
                        email: user.email
                    }
                    console.log(addProductInfo);
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            addProductInfo
                        }),
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((data) => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success('order confirmed')
                                navigate(from, { replace: true });
                            }
                        });
                }
            })
        reset();


    }

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/category')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className='h-fit flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>Add Product</h1>
            <form onSubmit={handleSubmit(handleProductInfo)} className="form-control w-full max-w-xs  border-double border border-slate-100 shadow-2xl p-10 rounded-lg">
                <span className="label-text font-bold">Product Name</span>
                <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" {...register("name", { required: true })} />

                <span className="label-text font-bold">Brand</span>
                <select className="select select-bordered w-full max-w-xs rounded-lg mb-4" {...register("category")} id='categoryName'>
                    {
                        categories.map(brand => <option
                            key={brand._id}
                            value={brand.categoryId}
                        >{brand.category}</option>)
                    }
                </select>
                <span className="label-text font-bold">Condition</span>
                <select className="select select-bordered w-full max-w-xs rounded-lg mb-4" {...register("condition")}>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    }
                </select>


                <span className="label-text font-bold">Your Name</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" placeholder="Your Name" type="text" {...register("sellerName", { required: true })} />

                <span className="label-text font-bold">Used Time</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="text" {...register("usedTime", { required: true })} />

                <span className="label-text font-bold">Original Price</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="text" {...register("originalPrice", { required: true })} />

                <span className="label-text font-bold">Resale Price</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="text" {...register("resalePrice", { required: true })} />

                <span className="label-text font-bold">Location</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="text" {...register("location", { required: true })} />

                <span className="label-text font-bold">Description</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="text" {...register("description", { required: true })} />

                <span className="label-text font-bold">Upload Image</span>
                <input type="file" {...register("imageURL", { required: true })} />

                <input type="submit" value="Submit" className="btn btn-primary bg-[#323232] text-[#ff6507] rounded-lg w-full mt-3" />
            </form >

        </div >
    );
};

export default AddProduct;