import React from 'react';
import SlotCounter from 'react-slot-counter';

const Achievment = () => {
    return (
        <div className='py-16 '>
 <h1 className="text-5xl text-center font-semibold">Our Achievment</h1>
            <div className='md:flex  justify-center my-12 lg:my-16 gap-8 text-center lg:text-black'>
            <div className="card bg-slate-100 lg:w-80  mb-5 lg:mb-0 mx-5 h-44"data-aos="fade-right"data-aos-duration="1000">

  <div className="card-body font-semibold text-4xl pt-12">
  <SlotCounter value={78} duration={4}/>
  <p className=' text-xl font-medium'>Miles Traveled</p>
  </div>
</div>

<div className="card mb-5 lg:mb-0 mx-5  bg-slate-100 lg:w-80 "data-aos="fade-right"data-aos-duration="1000">
  <div className="card-body font-semibold text-4xl pt-12 ">
<SlotCounter value={60} duration={4}/>
<p className=' text-xl font-medium'>Continents Visited</p>
</div>
</div>

<div className="card mb-5 lg:mb-0 mx-5  bg-slate-100 lg:w-80" data-aos="fade-left" data-aos-duration="1000">
  <div className="card-body font-semibold text-4xl pt-12">
  <SlotCounter value={82} duration={4}/>   
  <p className=' text-xl font-medium'>Days Traveled</p>
  </div>
</div>

<div className="card  mx-5 bg-slate-100 lg:w-80"data-aos="fade-left" data-aos-duration="1000">
  <div className="card-body font-semibold text-4xl pt-12" >
  <p><SlotCounter value={500} duration={4} />+</p>
  <p className='text-xl font-medium'>Tours Organaized</p>
  </div>
</div>
    </div>
 </div>
    );
};

export default Achievment;