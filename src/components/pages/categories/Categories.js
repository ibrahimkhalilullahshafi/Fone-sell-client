import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    return (
        <div>
            <Link to={`/category/${category.categoryId}`}><button className="btn btn-ghost">{category.category}</button></Link>
        </div>
    );
};

export default Categories;