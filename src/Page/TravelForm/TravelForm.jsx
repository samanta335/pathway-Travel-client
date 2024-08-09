import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Authentication/Providers/AuthProvider';
import '../Authentication/Animation.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAxios from '../../Hook/UseAxios';


const TravelForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxios();

    const closeModal = () => {
        setIsOpen(false);
    };

    const added=()=>{
        toast.success("Booking Confirmed");
    }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name,fromDate,toDate,destination,email , number, postedBy } = data;
    const booking = {
      name,
     fromDate,
     toDate,
     destination,
      number,
      email,
    };
    console.log(booking)
    axiosSecure.post(`/booking`, booking).then((res) => {
        if (res.data.insertedId) {
       refetch()
        }
  })
    
  };

    return (
        <div>
            {isOpen && (<div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="modal modal-open ">
                        <div className="modal-box">
                            <button className="modal-close" onClick={closeModal}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6L6 18"></path>
                                    <path d="M6 6L18 18"></path>
                                </svg>
                            </button>
                            <h1 className="gradient-animation text-3xl bg-gradient-to-r from-pink-400 from-20% via-sky-300 via-30% to-green-500 to-90% text-transparent bg-clip-text text-center font-bold">Book Your Destination</h1>
                            <div className="modal-content w-100% ">
                                <div className="p-2  my-5">
                                <form onSubmit={handleSubmit(onSubmit)} className=''>
        <div className='grid md:grid-cols-2 gap-5'>
        <label className="label">
          <input
            className="text-input input input-bordered focus:outline-none"
            value={user?.email}
            {...register("email")}
            placeholder="Your email"
            type="email"
          />
        </label>
        <label className="label">
          <input
            className="text-input input input-bordered focus:outline-none"
            {...register("name", { required: true })}
            placeholder="Your Name"
            required="Required"

          />
        </label>
        
        <label className="label">
          <input
            className="text-input input input-bordered focus:outline-none"
            {...register("number", { required: true })}
            placeholder="Phone Number"
            required="Required"

          />
        </label>
        <label className="label">
          <input
            className="text-input input input-bordered focus:outline-none"
            {...register("destination", { required: true })}
            placeholder="Destination"
            required="Required"

          />
        </label>
        <div>
        <label className="label ">
            <span>From</span>
        </label>
        <input
            className="text-input input input-bordered focus:outline-none"
            {...register("fromDate", { required: true })}
            required="Required"
            type='date'
          />
        </div>
        <div>
        <label className="label ">
            <span>To</span>
        </label>
        <input
            className="text-input input input-bordered focus:outline-none"
            {...register("toDate",)}
            required="Required"
            type='date'
          />
        </div>
        </div>
          <div className="text-center">
            <input
            onClick={added}
            className="submit-btn mx-auto text-center bg-red-500 text-white mt-10 px-20 py-2"
            value="Confirm"
            type="submit"
          />
          </div>
      </form>
        
      </div>
       </div>
        </div>
       </div>
      </div>)}
      <ToastContainer/>
        </div>
    );
};

export default TravelForm;