import React, { useState } from 'react';
import './Featured.css'
import featuredImg from '../../../assets/Home/featuredimg.png'
import { Link } from 'react-router-dom';
import { FaArrowRight,  } from 'react-icons/fa';
import { useCollapse } from 'react-collapsed'


const Featured = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div className="featured-item bg-fixed text-white pt-16 lg:pt-20 my-24 lg:my-20">
       
        <div className="md:flex justify-center gap-10 items-center bg-slate-500 bg-opacity-60 pb-12 lg:pb-20 pt-12 px-5 lg:px-24">
          <div>
            <img className=' lg:w-4/5' src={featuredImg} alt="" />
          </div>
          <div className="  pt-5 md:w-3/4">
            <h1 className="text-3xl px-5 lg:px-0 lg:text-4xl  font-bold">Bandarban, Chittagong</h1>
            <p className="uppercase px-5 lg:px-0 text-2xl py-2">Where you can go.</p>
            <p className='text-xl text-medium px-5 lg:px-0 lg:w-4/5' >
            Bandarban Hill District is the most remote and least populated district in Bangladesh. The lure of the tallest peaks of Bangladesh <section {...getCollapseProps()}> treks through virgin forests and chance to meet more than 15 tribes of the region up close is growing both among Bangladeshis and tourists from other countries.</section> <button {...getToggleProps()} className='text-neutral-content   font-semibold'>
        {isExpanded ? 'read less' : 'read more...'}
      </button>
            </p>
      
           <button> <Link to='/package' className='btn mx-5 lg:mx-0 border-none  text-white mt-5 text-lg font-medium  bg-red-500 hover:bg-red-400'>See Our Packages <FaArrowRight />
            </Link></button>
          </div>
        </div>
      </div>
    );
};

export default Featured;