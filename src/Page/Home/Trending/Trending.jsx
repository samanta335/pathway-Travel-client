import React from 'react';
import cox from '../../../assets/Home/cox.png'
const Trending = () => {
    return (
<div className=' pb-14 '>
<h3 className="text-semibold text-center
             text-orange-600 uppercase text-lg">Package</h3>
<h1 className='text-4xl text-center font-bold '>Our Trending Tour</h1>
<hr className='w-4/5 lg:w-1/2 mx-auto my-8'/>
<div className=''>
<div className='flex-cols  lg:flex justify-center items-center'>
            <div className="rounded-full mx-auto lg:mx-0 w-[250px] h-[250px] md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-60 xl:h-60 ">
                                    <img
                                        src="https://i.postimg.cc/J43pcPC1/saint-martin.jpg"
                                        alt="Sajek"
                                        className="object-cover w-full h-full transition-transform  transform hover:scale-105 rounded-full "
                                        style={{ border: '4px solid blue' }}
                                    />
<p className="text-center mt-2  text-xl font-bold ">Saint Martin</p>
  </div>
  <div className="rounded-full mx-auto w-[250px] h-[250px] md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-60 xl:h-60  lg:mx-14 my-14 lg:my-0">
                                    <img
                                        src={cox}
                                        alt="Sajek"
                                        className="object-cover w-full h-full transition-transform  transform hover:scale-105 rounded-full"
                                        style={{ border: '4px solid blue' }}
                                    />
<p className="text-center mt-2  text-xl font-bold ">Marin Drive</p>
 </div>
            <div className="rounded-full mx-auto  lg:mx-0 w-[250px] h-[250px] md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-60 xl:h-60  relative">
                                    <img
                                        src="https://as2.ftcdn.net/v2/jpg/06/99/45/61/1000_F_699456135_myZiVNvI1UaEZ24BByzxmpazcLU22lZ0.jpg"
                                        alt=""
                                        className="object-cover w-full h-full transition-transform  transform hover:scale-105 rounded-full"
                                        style={{ border: '4px solid blue' }}
                                    />
<p className="text-center mt-2 text-xl font-bold ">Jaflong</p>
  </div>
  </div>
</div>
</div>
    );
};

export default Trending;