import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import Card from './Card';

const StackedCard = () => {
    const [profiles, setProfiles] = useState([
        { id: 1, category: 'clothing' },
        { id: 2, category: 'accessories' },
        { id: 3, category: 'lojaProducts' },
    ]);

    const swiped = (direction, id) => {
        console.log(`Removing: ${id}`);
    };

    const outOfFrame = (id) => {
        console.log(`${id} left the screen`);
        // Remove the card from the state
        setProfiles(profiles.filter(profile => profile.id !== id));
    };

    return (
        <div>
            <div className='py-32'>
                <div className='flex gap-16 h-52 w-full'>
                    {profiles.map((profile) => (
                        <div className='w-full'>
                            <TinderCard
                                key={profile.id}
                                onSwipe={(dir) => swiped(dir, profile.id)}
                                onCardLeftScreen={() => outOfFrame(profile.id)}
                            >
                                <Card url={profile.url} />
                            </TinderCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StackedCard;