import React, { useState } from 'react';
import Collage from '../components/home/Collage';
import StackedCard from '../components/home/StackedCard';

const Home = () => {

    return (
        <div className='px-20 pb-20'>
            <Collage />
            <StackedCard category='clothing' />
            <StackedCard />
            <StackedCard />
        </div>
    );
}

export default Home;