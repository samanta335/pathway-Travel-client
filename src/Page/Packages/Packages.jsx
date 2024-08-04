import React, { useEffect, useState } from 'react';
import PackageCard from './PackageCard';
import location from '../../assets/Home/Cover4.jpg'
const packages = () => {
const [packages, setpackages]=useState([])
useEffect (()=>{
    fetch('package.json')
    .then((res)=>res.json())
    .then((data)=>setpackages(data))
    
},[])

    return (
<div>
<div
                className="md:h-80 h-20 mt-2 bg-cover "
                style={{
                    backgroundImage:
                        `url('${location}')`,
                }}
            >
                <span className="titles md:text-6xl text-4xl text-white md:absolute md:right-[38%] md:top-36  text-center">
                    Our Packages
                </span>
</div>
                <div className="grid md:grid-cols-3 my-16  gap-10">
{
    packages.map((card)=>(
        <PackageCard key={card.id} card={card}></PackageCard>
    ))
}
</div>
    </div>
    );
};

export default packages;