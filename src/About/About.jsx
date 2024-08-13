import React, { useEffect, useState } from 'react';
import PopularPost from './PopularPost';
import Achievment from './Achievment';
import Photography from './Photography';
import aboutUs from '../assets/about-us.jpg'
import { FaInstagram } from 'react-icons/fa';

const About = () => {
    const [about, setabout]=useState([])
useEffect (()=>{
    fetch('http://localhost:5000/about')
    .then((res)=>res.json())
    .then((data)=>setabout(data))
    
},[])
    return (
        <div className=''>
            <div
                className="md:h-80 h-24 bg-cover "
                style={{
                    backgroundImage:
                        `url('${aboutUs}')`,
                }}
            >
                <span className="titles md:text-6xl text-4xl font-bold text-white md:absolute md:right-[42%] md:top-36  text-center">
                   About Us
                </span>
</div>
            <Photography></Photography>
            <Achievment></Achievment>
            <h1 className="text-5xl text-center font-semibold">Most Popular Post</h1>
             <div className="grid md:grid-cols-2 my-16 gap-10">
            {about.map((post)=>(
                <PopularPost key={post._id} post={post}></PopularPost>
            ))}
             </div>
             <div className='text-center my-24'>
                <p className=''>
                    <FaInstagram className=' mx-auto font-semibold text-3xl text-red-500' />Find us on Instagram
                    </p>
                <h1 className="text-4xl text-bold ">@Pathway Travel</h1>
             </div>
        </div>
    );
};

export default About;