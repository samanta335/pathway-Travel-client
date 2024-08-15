import banner from '../../../assets/Home/banner.jpg'
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Providers/AuthProvider';
import TravelForm from '../../TravelForm/TravelForm';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRight,FaLocationArrow, FaCalendarAlt } from 'react-icons/fa';

const Banner = () => {
const {user}=useContext(AuthContext)
const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
const location = useLocation()

  const openModal = () => {
    setIsOpen(true);
};


const handlePrivate = () => {
    Swal.fire({
              title: "Please login to book your destination!",
              icon: "warning",
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login now!",
            })
                navigate("/login", { state: { from: location } });
  };

    return (
        <div className=''>
            <div
  className="hero min-h-screen lg:relative bg-cover"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
 <div className="hero-content  text-white text-center">
 <div className="max-w-xl mb-28 lg:mb-20">
      <p className=" text-3xl lg:text-4xl  font-bold">
        Let's Make <p className='text-4xl lg:text-5xl '>Your Next Holiday</p> <p className='text-3xl lg:text-4xl'>Amazing</p>
      </p>
      </div>
      </div>
<div className='flex bg-[#F3F3F3] bg-opacity-75  text-indigo-600 lg:text-lg lg:text-semibold mt-16 lg:mt-32 py-1 lg:p-2 rounded-full '>
 <p className='px-2 lg:px-5 flex items-center border-r-2 border-indigo-300'><FaLocationArrow className='w-2.5 h-2.5 lg:w-3 lg:h-3 lg:mx-1'/> Location</p>

 <p className='px-2 lg:px-5 flex items-center border-r-2 border-indigo-300'><FaCalendarAlt className='w-3 h-3 lg:w-3.5 lg:h-3.5 lg:mx-1'/> Check In</p>

 <p className='px-2 lg:px-5 flex items-center'><FaCalendarAlt className='w-3 h-3 lg:w-3.5 lg:h-3.5 lg:mx-1'/>Check Out</p>

 {user?
      (<button onClick={openModal} className="btn btn-xs lg:btn-sm rounded-full text-white lg:text-lg border-none m-1 lg:ml-5 bg-blue-600 hover:bg-blue-600">Book Now <FaArrowRight /></button>)
      :(
        <button onClick={handlePrivate} className="btn btn-xs lg:btn-sm rounded-full text-white lg:text-lg border-none ml-2 lg:ml-5 bg-blue-600 hover:bg-blue-600">Book Now<FaArrowRight className='w-3.5 h-3.5 '/></button>
      )}
</div>
  </div>
{isOpen && (<TravelForm></TravelForm>)}
  </div>
    );
};

export default Banner;