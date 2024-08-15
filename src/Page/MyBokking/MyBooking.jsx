import React from 'react';
import { FaBookOpen, FaCheckCircle, FaHome, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Contant from './Contant';

const MyBooking = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  items-center justify-center">
    {/* Page content here */}
    <Contant></Contant>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open Menu
    </label>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu  bg-blue-900 text-white text-lg min-h-full w-80 py-28 px-16">
      {/* Sidebar content here */}
      <li>
<Link to='/' className='hover:bg-transparent '> <FaHome></FaHome> Home</Link>
        </li>
        <li>
<Link to="/package" className='hover:bg-transparent'>
<FaBookOpen/>Packages</Link>
        </li>
        <li>
<Link to='/booking' className=''><FaCheckCircle />Your Booking</Link>
        </li>
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default MyBooking;