import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import Video from '../Video/Video';
import Trending from '../Trending/Trending';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <Trending></Trending>
            <Video></Video>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;