import React, { useEffect, useState } from 'react';
import PopularPost from './PopularPost';
import Achievment from './Achievment';
import Photography from './Photography';
import aboutUs from '../assets/about.jpg'

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
        </div>
    );
};

export default About;