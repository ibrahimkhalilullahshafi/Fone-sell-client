import React from 'react';
import logo from '../../../logo.png'

const Header = () => {
    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img className="h-20" src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><p>Item 1</p></li>
                        <li tabIndex={0}>
                            <p>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </p>
                            <ul className="p-2 bg-base-100">
                                <li><p>Submenu 1</p></li>
                                <li><p>Submenu 2</p></li>
                            </ul>
                        </li>
                        <li><p>Item 3</p></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;