import React from 'react';

const LocationCard = ({ imgUrl, name }) => {
    return (
        <div className='flex flex-col items-center h-96'>
            <img className='w-80 h-80 rounded-[50%] object-cover' src={imgUrl} alt="" />
            <div className='flex justify-center mt-5 w-10/12'>
                <h3 className='tracking-wide text-2xl text-center w-full'>{name}</h3>
            </div>
        </div>
    );
}

export default LocationCard;
