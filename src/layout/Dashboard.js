import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared-components/header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><p>Sidebar Item 1</p></li>
                        <li><p>Sidebar Item 2</p></li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;