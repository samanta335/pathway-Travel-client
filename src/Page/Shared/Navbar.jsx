import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Home/Suitcase.png'
const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar md:absolute lg:text-white max-w-screen-xl z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        className="menu menu-sm text-lg font-bold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
<Link>Home</Link>
        </li>
        <li>
<Link to="/package">Packages</Link>
        </li>
        <li>
<Link>Contact</Link>
        </li>
      </ul>
    </div>
    <img className='w-14 px-2 ' src={logo} alt="" />
    <a className=" text-2xl font-semibold ">
     PathwayTravel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-lg font-bold px-1 font-semibold">
    <li>
<Link>Home</Link>
        </li>
        <li>
<Link to="/package">Packages</Link>
        </li>
        <li>
<Link>Contact</Link>
        </li>
    </ul>
  </div>
  <div className="navbar-end ">
    <Link to='/login' className='btn btn-outline lg:text-white  hover:bg-blue-500 px-10 hover:border-none'>Login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;