import React from 'react';
import img from '../assets/aboutimage.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Photography = () => {
    return (
<div className='my-10 lg:my-24 '>
             <h1 className="text-4xl lg:text-5xl pt-14 pb-7 text-center font-semibold">Why Choose Us</h1>
             <hr className='pb-10 w-4/5 lg:w-2/4 mx-auto'/>
<div className='md:flex justify-center  gap-24 items-center'>
            <img  src={img}alt=""  className='lg:w-2/5 px-6 lg:px-0'/>
                <p className='px-6 lg:px-0 lg:w-2/5 pt-10 lg:pt-0 text-lg'  >
                At Pathway Travel, we believe that travel is not just about visiting new places, but about creating unforgettable experiences and cherished memories. With years of expertise in the travel industry, our dedicated team is committed to making your travel dreams come true. Whether you're looking for a relaxing beach vacation, an adventurous trek through the mountains, a romantic getaway, or a cultural exploration, we have the perfect trip for you.
                </p>
        </div>
</div>
    );
};

export default Photography;