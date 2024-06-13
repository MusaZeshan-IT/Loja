import React, { useState } from 'react';
import StackedCard from '../components/home/StackedCard';
import CardProductList from '../helpers/CardProductList';
import CollageLeft from '../components/home/CollageLeft';
import CollageRight from '../components/home/CollageRight';
import Categories from '../components/home/Categories';
import CoverImage from '../components/home/CoverImage';

const Home = () => {
    const [profiles, setProfiles] = useState(CardProductList());

    // Create an object to store whether a category has been rendered or not
    const renderedCategories = {};

    return (
        <div className='pb-20'>
            <div className='px-20'>
                <CollageLeft />
                <div className='py-32'>
                    <div className='flex gap-16 h-52 w-full'>
                        {profiles.map((profile) => {
                            // Check if the category has already been rendered
                            if (!renderedCategories[profile.category]) {
                                renderedCategories[profile.category] = true; // Mark the category as rendered
                                return (
                                    <StackedCard
                                        setProfiles={setProfiles}
                                        profiles={profiles}
                                        profile={profile}
                                        key={profile.id}
                                        category={profile.category}
                                    />
                                );
                            }
                            return null; // If category has already been rendered, return null
                        })}
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
