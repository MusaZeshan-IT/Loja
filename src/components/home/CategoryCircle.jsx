import React from 'react';

const CategoryCircle = ({ categoryName, iconName, imgUrl }) => {
    return (
        <div>
            <div className='flex justify-center items-center rounded-[50%] mt-16'>
                <div className='flex flex-col justify-between items-center h-[155px] w-[155px]'>
                    {imgUrl ? (
                        <img className='h-[75px]' src={imgUrl} alt="" />
                    ) : (
                        <i className={`${iconName} text-7xl text-black`}></i>
                    )}
                    <h2 className='mt-10 text-2xl'>{categoryName}</h2>
                </div>
            </div>
        </div>
    );
}

export default CategoryCircle;
