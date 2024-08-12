import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';


const Reviews = () => {
    const [reviews, setreviews]=useState([])
useEffect (()=>{
    fetch('http://localhost:5000/reviews')
    .then((res)=>res.json())
    .then((data)=>setreviews(data))
    
},[])
    return (
        <div className='mb-20 bg-slate-100 py-12'>
            <h3 className="text-semibold text-center
             text-orange-600 uppercase ">What Our Client say</h3>
             <hr className='w-2/5 mx-auto  my-2'/>
<h1 className='text-4xl text-center font-bold '>Reviews</h1>
<hr className='w-2/6 mx-auto  my-5'/>
<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

  {reviews.map((review) => (
    <SwiperSlide key={review._id}>
      <div className="flex flex-col items-center  my-5 ">
        <img className='rounded-full w-28 h-28' src={review.img} alt="" />
          <h3 className="text-2xl py-4 text-orange-600">{review.name}</h3>
          <Rating
          style={{ maxWidth: 130 }}
          value={review.rating}
          readOnly
        />
        <p className=" py-4 w-3/5">{review.review}</p>
      </div>
    </SwiperSlide>
  ))}
  </Swiper>

        </div>
    );
};

export default Reviews;