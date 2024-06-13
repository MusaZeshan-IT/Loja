import React from 'react';

const CategoryCircle = ({ categoryName, iconName }) => {
    return (
        <div>
            <div className='flex justify-center items-center rounded-[50%] mt-16'>
                <i className={`${iconName} text-7xl text-black`}></i>
            </div>
            <h2 className='text-center mt-10 text-2xl'>{categoryName}</h2>
        </div>
    );
}

export default CategoryCircle;
