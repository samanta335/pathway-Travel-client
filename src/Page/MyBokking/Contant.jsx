import React, { useContext, useEffect, useState } from 'react';
import UseBooking from '../../Hook/UseBooking';
import UseAxios from '../../Hook/UseAxios';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

const Contant = () => {
  const [axiosSecure]=UseAxios()
  const [booking, refetch]= UseBooking()
  console.log(booking)

  const handleDelete = (booked) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/booking/${booked._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

    return (
        <div>
          <div className="overflow-x-auto  ">
        <table className="table table-xl">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>             
              <th className='lg:pl-8'>Email</th>
              <th className='lg:pl-6'>Number</th>
              <th>Destination</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {booking.map((booked, index)=>(
            <tr key={booked._id}>
              <th>{index +1}</th>
              <td>{booked.name}</td>
              <td className='lg:pl-4'>{booked.email}</td>
              <td>{booked.number}</td>
              <td className='lg:pl-6'>{booked.destination}</td>
              <td>{booked.fromDate}</td>
              <td>{booked.toDate}</td>
              <td><button
                  onClick={() => handleDelete(booked)}
                  className="btn btn-sm px-2 bg-red-600  text-white"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default Contant;