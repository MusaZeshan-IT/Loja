import React from 'react';

const Card = ({ url, imageExhausted }) => {
    return (
        <>
            {imageExhausted ? (
                <div className="w-full h-52 bg-black rounded-3xl shadow-lg flex justify-center items-center">
                    <p className='text-white text-lg'>No more images in this category</p>
                </div>
            ) : (
                <div className="w-full h-52 rounded-3xl overflow-hidden">
                    <img
                        onDragStart={(e) => e.preventDefault()}
                        src={url}
                        className="w-full h-full object-cover bg-black"
                    />
                </div>
            )}
        </>
    );
};

export default Card;
