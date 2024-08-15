import React from 'react';

const PopularPost = ({post}) => {
    const {img, title, date, description,location}=post
console.log(post)
    return (
        <div>
  <div className="hero-content border border-base-200 w-full flex-col lg:flex-row">
    <img
      src={img}
      className="lg:h-52 lg:w-52 object-cover rounded-lg" />
    <div>
        <div className='flex gap-4'>
            <p className='text-purple-800 text-lg font-semibold'>{location}</p>
            <p className='font-semibold'>{date}</p>
        </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-2">{description} </p>   
  </div>
</div>
        </div>
    );
};

export default PopularPost;