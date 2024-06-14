import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import Card from './Card';

const StackedCard = ({ profile, setProfiles, profiles }) => {
    const [imagesExhausted, setImagesExhausted] = useState(false);

    useEffect(() => {
        // Check if there are no more images in the current category
        const remainingProfiles = profiles.filter(p => p.category === profile.category);
        if (remainingProfiles.length === 0 || remainingProfiles.every(p => !p.url)) {
            setImagesExhausted(true);
        }
    }, [profiles, profile.category]);

    const outOfFrame = (id) => {
        setProfiles(profiles.filter(profile => profile.id !== id));
    };

    return (
        <div className='w-full relative'>
            {profiles
                .filter(p => p.category === profile.category)
                .map((p, index) => (
                    <div key={p.id}>
                        {p.url === undefined ? (
                            <>
                                <Card imageExhausted={imagesExhausted} category={p.category} />
                            </>
                        ) : (
                            <>
                                <div
                                    className="absolute top-0 left-0 w-full h-full transform"
                                    style={{
                                        zIndex: profiles.length - index,
                                    }}
                                >
                                    <TinderCard
                                        onCardLeftScreen={() => outOfFrame(p.id)}
                                    >
                                        <Card url={p.url} category={p.category} />
                                    </TinderCard>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            <h2 className='text-[28px] mt-12 text-center font-light tracking-wide'>{profile.category.toLocaleUpperCase()}</h2>
        </div>
    );
}

export default StackedCard;
