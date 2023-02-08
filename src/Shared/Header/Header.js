import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/background.jpg'
import logo from '../../assets/logo.jpg'
import { AuthContext } from '../../context/ContextProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
   



    const menubar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/course">Course</Link></li>
        <li><Link to="/faq">Faq</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>

    </>


    const handdleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error))
    }

    return (
        <div style={{ background: `url(${background})` }} className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menubar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-emerald-200">
                    <img className='w-8 h-6 rounded font-bold ' src={logo} alt="" />OnlineEdu</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menubar}
                </ul>
            </div>
            <div className="navbar-end">
               
                {
                    user?.uid ?
                    <button onClick={handdleLogout}>Log Out</button>
                    :
                    <button>
                        <Link to='/login'>Log In</Link>
                    </button>
                }

            </div>
        </div>
    );
};

export default Header;