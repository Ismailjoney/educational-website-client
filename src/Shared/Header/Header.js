import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menubar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/course">Course</Link></li>
        <li><Link to="/faq">Faq</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {menubar}
                </ul>
            </div>
        </div>
    );
};

export default Header;