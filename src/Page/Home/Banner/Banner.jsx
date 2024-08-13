import banner from '../../../assets/Home/Banner.jpg'
import slide1 from '../../../assets/Home/slide1.jpg'
import slide2 from '../../../assets/Home/slide2.jpg'
import slide3 from '../../../assets/Home/slide3.webp'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Authentication/Providers/AuthProvider';
import TravelForm from '../../TravelForm/TravelForm';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
  className="hero min-h-screen  relative object-cover"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
  </div>
 <div data-aos="fade-right" data-aos-duration="1000" className="top-[42%] max-w-xl  ml-16 text-white  absolute ">
      <p className=" text-5xl  font-bold">
        Let's Make <p className=' text-5xl '>Your Next Holiday</p> <p className='text-5xl'>Amazing.</p>
      </p>
      {user?
      (<button onClick={openModal} className="btn text-white text-lg border-none  px-10 mt-5 bg-red-500 hover:bg-red-400">Book Now <FaArrowRight /></button>)
      :(
        <button onClick={handlePrivate} className="btn text-white text-lg border-none px-10  mt-5 bg-red-500 hover:bg-red-400">Book Now<FaArrowRight /></button>
      )}
 </div>

<div className='flex gap-5 w-[100%]'>
<img src={slide3} data-aos="fade-left"data-aos-duration="1000" alt="" className='absolute border-2 border-amber-500 object-cover h-96 w-52 rounded-box top-[30%] left-[77.5%]  hover:'  />

<p className='top-[78%] bg-black bg-opacity-25 text-white text-center text-2xl left-[80%] absolute'>Sreemangal</p>


<img src={slide2}alt=""data-aos="fade-right"data-aos-duration="1000" className='absolute  border-2 border-amber-500 object-cover h-96 w-52 mr-10 left-[48%] rounded-box top-[30%]'/>

<p className='top-[78%] bg-black rounded-lg bg-opacity-10 text-white text-center text-2xl left-[51%] absolute'>Sajek Valley</p>


<img src={slide1} alt=""data-aos="zoom-in"data-aos-duration="1000" className='absolute border-2 border-amber-500 object-cover h-96 w-52 mr-10 left-[63%] rounded-box top-[30%]'/>

<p className='top-[78%] text-white text-center text-2xl bg-black bg-opacity-25 left-[66%] absolute'>Sundarban</p>
</div>
{isOpen && (<TravelForm></TravelForm>)}
  </div>
    );
};

export default Banner;