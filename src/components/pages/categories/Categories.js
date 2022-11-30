import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl justify-center justify-items-center items-center my-4">
            <figure><img src={category.logoUrl} alt="Shoes" /></figure>
            <Link className='w-full' to={`/category/${category.categoryId}`}><button className="btn btn-primary w-full bg-[#323232] text-[#ff6507]">{category.category}</button></Link>
        </div>
    );
};

export default Categories;