import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import Card from './Card';

const StackedCard = ({ profile, setProfiles, profiles }) => {

    const swiped = (direction, id) => {
        console.log(`Removing: ${id}`);
    };

    const outOfFrame = (id) => {
        console.log(`${id} left the screen`);
        // Remove the card from the state
        setProfiles(profiles.filter(profile => profile.id !== id));
    };

    return (
        <div className='w-full'>
            <TinderCard
                key={profile.id}
                onSwipe={(dir) => swiped(dir, profile.id)}
                onCardLeftScreen={() => outOfFrame(profile.id)}
            >
                <Card url={profile.url} category={profile.category} />
            </TinderCard>
        </div>
    );
}

export default StackedCard;