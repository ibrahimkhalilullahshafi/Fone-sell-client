import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
import Categories from '../categories/Categories';
import banner from './banner.jpg'

const Home = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://a-12-server-five.vercel.app/category')
            .then(res => res.json())
    })
    return (

        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold text-[#323232}">Fone-Sell</h1>
                        <p className="mb-5 text-2xl font-bold">Swap your smartphone easily with us</p>
                        <Link to='/login'><button className="btn btn-primary bg-[#323232] text-[#ff6507] rounded-lg">Get Started</button></Link>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-5xl font-bold my-8'>Browse item by brand category</h1>

            <div className='justify-center items-center justify-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0'>
                {categories.map(category => <Categories
                    key={category._id}
                    category={category}
                >
                </Categories>
                )}
            </div>

        </div>
    );
};

export default Home;