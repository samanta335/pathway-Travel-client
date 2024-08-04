import React from 'react';
import banner from '../../../assets/Home/banner.png'
const Banner = () => {
    return (
        <div className='relative'>
            <div
  className="hero min-h-screen bg-fixed"
  style={{
    backgroundImage: `url(${banner})`,
  }}>

  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-xl">
      <p className=" text-3xl  font-serif font-bold">
        Let's Make <p className=' text-4xl '>Your Next Holiday</p> <p className='text-3xl'>Amazing.</p>
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;