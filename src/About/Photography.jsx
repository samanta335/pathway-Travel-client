import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Photography = () => {
    return (
        <div className='py-20 flex gap-16 items-center'>
            <img data-aos="fade-down" src="https://cdn.discordapp.com/attachments/1145335860443754598/1272227501099450500/962fba8f-mask-group.png?ex=66bade71&is=66b98cf1&hm=1285f0b356fa4622c5736e34c4c852f24650158400e13dd0fac50f0f9bb268b8&" alt="" />
                <p className='w-1/2 text-lg'  data-aos="fade-up">
                At Pathway Travel, we believe that travel is not just about visiting new places, but about creating unforgettable experiences and cherished memories. With years of expertise in the travel industry, our dedicated team is committed to making your travel dreams come true. Whether you're looking for a relaxing beach vacation, an adventurous trek through the mountains, a romantic getaway, or a cultural exploration, we have the perfect trip for you.
                </p>
        </div>
    );
};

export default Photography;