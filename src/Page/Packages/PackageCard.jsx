import React from 'react';

const PackageCard = ({card}) => {
    const {img, name, date, price, description}=card
    console.log(card)
  
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
      <button className="btn  text-white btn-sm px-8 bg-red-500 hover:bg-black">Confirm</button>
    </div>
  </div>
</div>
  </div>
    );
};

export default PackageCard;