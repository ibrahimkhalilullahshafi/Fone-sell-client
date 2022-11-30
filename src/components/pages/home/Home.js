import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import Categories from '../categories/Categories';
import banner from './banner.jpg'

const Home = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/category')
            .then(res => res.json())
    })
    return (

        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Fone-Sell</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
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