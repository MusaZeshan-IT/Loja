import React, { useState } from 'react';
import Collage from '../components/home/Collage';
import StackedCard from '../components/home/StackedCard';

const Home = () => {
    const [profiles, setProfiles] = useState([
        { id: 1, category: 'clothing' },
        { id: 2, category: 'accessories' },
        { id: 3, category: 'loja products' },
    ]);

    return (
        <div className='px-20 pb-20'>
            <Collage />
            <div className='py-32'>
                <div className='flex gap-16 h-52 w-full'>
                    {profiles.map((profile) => (
                        <StackedCard profile={profile} key={profile.id} category={profile.category} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;