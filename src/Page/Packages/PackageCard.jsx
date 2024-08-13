import React, { useContext, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import TravelForm from '../TravelForm/TravelForm';
import { AuthContext } from '../Authentication/Providers/AuthProvider';
import Swal from 'sweetalert2';

const PackageCard = ({card}) => {
    const {img, name, date, price, description}=card
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    const { user } = useContext(AuthContext);

    const openModal = () => {
        setIsOpen(true);
    };
 
    const handlePrivate = () => {
      Swal.fire({
                title: "Please login to Confirm your destination!",
                icon: "warning",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login now!",
              })
                  navigate("/login", { state: { from: location } });
    };

    return (
        <div className=''>
       <div className="border rounded relative bg-slate-100 h-96 shadow-xl">
    <img
      src={img}
      className='w-full h-44 object-cover rounded mb-4'
      alt="Shoes" />
  <div className="px-5">
   
<h2 className='text-end text-red-500'>{date}</h2>
    <h2 className="text-2xl font-semibold mb-2">{name}</h2>

    <p className="text-white px-4 absolute top-5 bg-red-500 right-5">
                    <span className="font-bold">{price}$</span>{" "}
                </p>
    <p className='text-gray-600'>{description}</p>
    <div className="text-end my-2">
      {user?
      (<button onClick={openModal} className="btn text-white btn-sm px-8 bg-red-500 hover:bg-red-400">Confirm</button>)
      :(
        <button onClick={handlePrivate} className="btn text-white btn-sm px-8 bg-red-500 hover:bg-red-400">Confirm</button>
      )}
    </div>
  </div>
</div>
{isOpen && (<TravelForm></TravelForm>)}
  </div>
    );
};

export default PackageCard;