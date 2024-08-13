import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../../assets/video.jpg'

const ProvideSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <section
            className="py-20 md:bg-cover bg-center my-20"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className=" mt-20 md:ml-10">
                <h2 className="titles  text-center md:text-left font-bold text-white mb-8" >
                    <p className='md:text-7xl text-5xl '>Explore</p> 
                <p className='md:text-6xl text-4xl'>Tanguar Haor</p>
                </h2>
                <div className="md:flex  md:mt-0 mt-10 md:gap-3 md:ml-0 ml-28">
                    <div className="flex items-center space-x-4 md:mt-0 mt-5">
                        <div className='flex items-center space-x-4 ' >
                    <button className="bg-orange-600 hover:bg-orange-500 text-gray-50 font-semibold md:px-6 px-10 py-3 rounded-full flex items-center space-x-1 " data-aos="fade-up">
                       <Link to='/about'>Read More</Link>
                        <FaArrowRight />
                    </button>
                            <button onClick={openModal} className="bg-white hover:bg-black text-orange-600 transition duration-500 ease-in-out  hover:text-white font-semibold px-6 py-6 rounded-full ml-4 inline-flex items-center" >
                                <FaPlay />
                            </button>
                            <p><span className='text-white font-semibold titles'>Watch video</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal modal-open">
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
                            <div className="modal-content">
                                <div className="p-2">
                                <iframe width="100%" height="350" src="https://www.youtube.com/embed/k9UZl3F35qY" title="Tanguar Haor 2021 Travel Video | Dihan Chowdhury" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProvideSection;