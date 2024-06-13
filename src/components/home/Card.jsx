import React from 'react';

const Card = ({ url, category }) => {
    return (
        <div className="w-full h-52 bg-black rounded-3xl shadow-lg">
            <img
                src={Clothes1}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
            />
            <h2 className='text-3xl text-center mt-16'>{category.toLocaleUpperCase()}</h2>
        </div>
    );
};

export default Card;