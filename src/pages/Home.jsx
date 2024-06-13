import React, { useState } from 'react';
import StackedCard from '../components/home/StackedCard';
import CardProductList from '../helpers/CardProductList';
import CollageLeft from '../components/home/CollageLeft';
import CollageRight from '../components/home/CollageRight';
import Categories from '../components/home/Categories';
import CoverImage from '../components/home/CoverImage';
import Footer from '../components/common/Footer';

const Home = () => {
    const [profiles, setProfiles] = useState(CardProductList());

    return (
        <div className='pb-20'>
            <div className='px-20'>
                <CollageLeft />
                <div className='py-32'>
                    <div className='flex gap-16 h-52 w-full'>
                        {profiles.map((profile) => (
                            <StackedCard setProfiles={setProfiles} profiles={profiles} profile={profile} key={profile.id} category={profile.category} />
                        ))}
                    </div>
                </div>
                <CollageRight />
                <Categories />
            </div>
            <CoverImage />
            <div className='px-20'>
                <CollageRight />
            </div>
        </div>
    );
}

export default Home;