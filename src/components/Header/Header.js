import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral">
                <div className="flex-1">
                    <img className='logo me-6' src="https://t3.ftcdn.net/jpg/04/70/99/62/360_F_470996233_hDT38FwIxhcy9QveIkYSEnstLD0VuRQ5.jpg" alt="" />
                    <h1 className="btn btn-ghost text-white bg-red-950 me-10 text-xl">CODING MASTER</h1>
                    <Link className='me-10 text-white' to='/'>Home</Link>
                    <Link className='me-10 text-white' to='/courses'>Courses</Link>
                    <Link className='me-10 text-white'>FAQ</Link>
                    <Link className='me-10 text-white' to='/blog'>Blog</Link>
                    <Link className='me-10 text-white' to='/login'>Log in</Link>
                    <Link className='me-10 text-white' to='/register'>Register</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;