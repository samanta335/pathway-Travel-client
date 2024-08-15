import React, { useEffect, useState } from 'react';
import PackageCard from './PackageCard';
import location from '../../assets/Packages-Cover.jpg'
const packages = () => {
const [packages, setpackages]=useState([])
useEffect (()=>{
    fetch('https://pathway-travel-server.vercel.app/package')
    .then((res)=>res.json())
    .then((data)=>setpackages(data))
    
},[])



    return (
<div>
<div
                className="md:h-80 h-24 bg-cover pt-8 text-center"
                style={{
                    backgroundImage:
                        `url('${location}')`,
                }}
            >
                <span className="titles md:text-6xl text-3xl font-bold text-white md:absolute md:right-[36%] md:top-36   text-center">
                    Our Packages
                </span>
</div>
                <div className="grid md:grid-cols-3 my-10 lg:my-16  gap-10">
{
    packages.map((card)=>(
        <PackageCard key={card._id} card={card}></PackageCard>
    ))
}
</div>
{/* <button className='btn '>see all</button> */}
    </div>
    );
};

export default packages;