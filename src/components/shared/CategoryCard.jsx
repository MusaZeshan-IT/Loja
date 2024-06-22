import React from 'react';
import SmCTA from '../shared/SmCTA';

const CategoryCard = ({name}) => {
    return (
        <div className='bg-[#d3d3d3] h-[250px] pt-14 pb-6 px-6 flex flex-col justify-between'>
            <h2 className='text-2xl text-white w-[40%] tracking-[1.5px]'>{name}</h2>
            <SmCTA title="LEARN MORE"/>
        </div>
    );
}

export default CategoryCard;
