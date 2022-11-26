import React from 'react';
import logo from '../../../logo.png'
import banner from './banner.jpg'

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

            {/* <div className='w-full h-fit p-6' style={{
                backgroundImage: `url(${banner})`
            }}><h1 className='font-mono text-4xl font-bold text-white w-1/4'>FONE-SELL is the right market for used mobile phones where you will find out the best quality second-hand mobile phones along with the latest brand new phones that you are looking for.</h1>
            </div> */}
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Header;