import banner from '../../../assets/Home/banner.jpg'
import React, { useContext, useEffect, useState } from 'react';
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
  className="hero min-h-screen  relative bg-cover"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
 <div className="hero-content mt-10 text-white text-center">
 <div className="max-w-xl">
      <p className="lg:bg-black lg:bg-opacity-5 rounded-xl text-4xl  font-bold">
        Let's Make <p className=' text-5xl '>Your Next Holiday</p> <p className='text-4xl'>Amazing</p>
      </p>
      {user?
      (<button onClick={openModal} className="btn text-base-200 text-lg border-none  px-5 mt-5 bg-green-500 hover:bg-green-400">Book Now <FaArrowRight /></button>)
      :(
        <button onClick={handlePrivate} className="btn  text-base-200 text-lg border-none px-5  mt-5 bg-green-500 hover:bg-green-400">Book Now<FaArrowRight /></button>
      )}
      </div>
      </div>
  </div>

{/* <div className='flex gap-5 w-[100%]'>
<img src={slide3} data-aos="fade-left"data-aos-duration="1000" alt="" className='absolute border-2 border-amber-500 object-cover h-96 w-52 rounded-box top-[30%] left-[77.5%]  hover:'  />
<p className='top-[78%] bg-black bg-opacity-25 text-white text-center text-2xl left-[80%] absolute'>Sreemangal</p>
<img src={slide2}alt=""data-aos="fade-right"data-aos-duration="1000" className='absolute  border-2 border-amber-500 object-cover h-96 w-52 mr-10 left-[48%] rounded-box top-[30%]'/>

<p className='top-[78%] bg-black rounded-lg bg-opacity-10 text-white text-center text-2xl left-[51%] absolute'>Sajek Valley</p>


<img src={slide1} alt=""data-aos="zoom-in"data-aos-duration="1000" className='absolute border-2 border-amber-500 object-cover h-96 w-52 mr-10 left-[63%] rounded-box top-[30%]'/>

<p className='top-[78%] text-white text-center text-2xl bg-black bg-opacity-25 left-[66%] absolute'>Sundarban</p>
</div> */}
{isOpen && (<TravelForm></TravelForm>)}
  </div>
    );
};

export default Banner;