import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/shared-components/header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li><Link to='/dashboard/allseller'>All seller</Link></li>
                        <li><Link to='/dashboard/allbuyer'>All buyer</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;