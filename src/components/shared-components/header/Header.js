import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png'
import { AuthContext } from '../../context/authprovider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItem = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addproduct">Add Product</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {user?.uid ?
            <li><button onClick={handleLogOut}>Log out</button></li> :
            <li><Link to="/login">Login</Link></li>
        }
    </React.Fragment >
    return (
        <section>
            <div className="navbar bg-base-100 justify-between p-0">
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Link to="/"><img className="h-20" src={logo} alt="" /></Link>
                <div className="navbar-end">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>


        </section>
    );
};

export default Header;