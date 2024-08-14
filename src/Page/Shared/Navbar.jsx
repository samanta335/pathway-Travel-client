import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Home/Suitcase.png'
import { AuthContext } from '../Authentication/Providers/AuthProvider';
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  <style>
    
  </style>

    return (
        <div className=''>
            <div className="navbar  md:absolute lg:text-white hover:bg-none max-w-screen-xl z-10 ">
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
        className="menu menu-sm text-lg hover:bg-transparent font-bold dropdown-content bg-base-100  mt-3 w-52 p-2 shadow">
        <li>
<Link to='/'>Home</Link>
        </li>
        <li>
<Link to="/package" className=''>Packages</Link>
        </li>
        <li>
<Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
    <img className='w-14 h-14 px-2 ' src={logo} alt="" />
    <a href='/' className=" text-3xl font-semibold ">
     PathwayTravel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  hover:bg-transparent text-xl font-semibold">
    <li>
<a href='/' className='hover:bg-transparent '>Home</a>
        </li>
        <li>
          <a href="/package"className='active:bg-transparent px-5' >Packages</a>
        </li>
        <li>
<a href='/about' className='hover:bg-transparent '>About Us</a>
        </li>
    </ul>
  </div>
  <div className="navbar-end lg:text-white">
    <ul className='menu menu-horizontal text-xl  font-semibold'>
    {user ? (
              <>
                <li>
                  <a href="/booking" className='pr-44 pt- text-xl hover:bg-transparent'>Your Booking</a>
                </li>
                <li>
                  <button
                    className="btn btn-outline text-lg text-white hover:bg-transparent px-8  hover:border-white"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to='/login' className='btn  text-lg btn-outline text-white  hover:bg-transparent px-8 hover:border-white'>Login</Link> 
              </li>
            )}
           
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;