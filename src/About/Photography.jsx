import React from 'react';
import img from '../assets/aboutimage.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Photography = () => {
    return (
<div className='mt-28 mb-20'>
             <h1 className="text-5xl py-14 text-center font-semibold">Why Join Us</h1>
<div className=' justify-center flex gap-20 items-center'>
            <img data-aos="fade-down" src={img}alt=""  className='w-2/5'/>
                <p className='w-2/5 text-lg'  data-aos="fade-up">
                At Pathway Travel, we believe that travel is not just about visiting new places, but about creating unforgettable experiences and cherished memories. With years of expertise in the travel industry, our dedicated team is committed to making your travel dreams come true. Whether you're looking for a relaxing beach vacation, an adventurous trek through the mountains, a romantic getaway, or a cultural exploration, we have the perfect trip for you.
                </p>
        </div>
</div>
    );
};

export default Photography;