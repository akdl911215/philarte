import React from 'react';
import HomeMain from './HomeMain';
import HomeMainFooter from './HomeMainFooter';
import HomeMainHead from './HomeMainHead';
import HomeMainNavi from './HomeMainNavi';

const Home = () => {
    return (
        <>
            <HomeMainNavi />
            <HomeMain />
            <HomeMainHead />
            <HomeMainFooter />
        </>
    );
};
export default Home;
