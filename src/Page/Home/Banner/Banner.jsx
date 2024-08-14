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
  className="hero min-h-screen  relative bg-cover"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
 <div className="hero-content  text-white text-center">
 <div className="max-w-xl mb-20">
      <p className="  text-4xl  font-bold">
        Let's Make <p className=' text-5xl '>Your Next Holiday</p> <p className='text-4xl'>Amazing</p>
      </p>
      </div>
      </div>
<div className='flex bg-[#F3F3F3] bg opacity-80 w text-indigo-600 text-lg text-semibold mt-32 p-2 rounded-full '>
 <p className='px-5 flex items-center border-r-2 border-indigo-300'><FaLocationArrow className='w-3 h-3 mx-1'/> Location</p>
 <p className='px-5 flex items-center border-r-2 border-indigo-300'><FaCalendarAlt className='w-3.5 h-3.5 mx-1'/> Check In</p>
 <p className='px-5 flex items-center'><FaCalendarAlt className='w-3.5 h-3.5 mx-1'/>Check Out</p>
 {user?
      (<button onClick={openModal} className="btn btn-sm rounded-full text-white text-lg border-none ml-5 bg-amber-600 hover:bg-amber-600">Book Now <FaArrowRight /></button>)
      :(
        <button onClick={handlePrivate} className="btn btn-sm rounded-full text-white text-lg border-none ml-5 bg-blue-600 hover:bg-amber-600">Book Now<FaArrowRight className='w-3.5 h-3.5 '/></button>
      )}
</div>
  </div>
{isOpen && (<TravelForm></TravelForm>)}
  </div>
    );
};

export default Banner;