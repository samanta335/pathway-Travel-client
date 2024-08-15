import React from 'react';
import guide from '../../../assets/Home/guide.png'
import food from '../../../assets/Home/food.png'
import hotel from '../../../assets/Home/hotel.png'
import medical from '../../../assets/Home/medical.jpg'

const Category = () => {
    return (
        <div className='my-20 lg:my-28 '>
            <h3 className="text-semibold text-center
             text-orange-600 uppercase text-lg">Catergory</h3>
            <h1 className='text-3xl text-center font-bold'>We Offer Best Services</h1>
            <div className='mt-10 grid md:grid-cols-2 gap-8'>
                <div className='flex shadow-lg'>
<img className='w-[100px] h-[100px] rounded-full p-2' src={guide} alt="" />
<div className=' px-3 py-3 '>
    <h2 className=' font-bold'>Guided Tours</h2>
    <p className=' '>A travel guide can include information about  hotels, restaurants, transportation, and activities that may be of interest to a visitor.</p>
</div>
            </div>
            <div className='flex shadow-lg'>
<img className='w-[100px] h-[100px] p-2 rounded-full' src={food} alt="" />
<div className=' px-3 py-3'>
    <h2 className=' font-bold'>Best Food</h2>
    <p >Our customer reviews say it all: our food is excellent, absolutely delicious, best breakfast and pizza and staff is so friendly.
    </p>
</div>
            </div>
            <div className='flex shadow-lg'>
<img className='w-[100px] h-[100px] p-2 rounded-full' src={hotel} alt="" />
<div className='px-3 py-3 '>
    <h2 className='font-bold'>Hotel</h2>
    <p >The hotel room will be clean, nice and spacious.The staff were friendly and the location is just perfect for a walk around the city centre.
    </p>
</div>
            </div>
            <div className='flex shadow-lg'>
<img className='w-[100px] h-[100px] p-2 rounded-full' src={medical} alt="" />
<div className=' px-3 py-3'>
    <h2 className=' font-bold'>Medical insurance</h2>
    <p className=' '>Medical treatment includes. Using prescription medications, or use of a non-prescription drug at prescription strength. 
    </p>
</div>
            </div>

            </div>
        </div>
    );
};

export default Category;