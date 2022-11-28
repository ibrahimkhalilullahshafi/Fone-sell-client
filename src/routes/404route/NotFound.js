import React from 'react';
import { Link } from 'react-router-dom';
import picture from './error.png'

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div><img src={picture} alt="" /></div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-5xl text-center font-bold text-[#ff6507] mb-5'>PAGE NOT FOUND</h1>
                    <Link to="/"><button className="btn btn-accent text-[#ff6507]">Go to Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;