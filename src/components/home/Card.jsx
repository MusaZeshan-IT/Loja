import React from 'react';

const Card = ({ url }) => {
    return (
        <div className="w-full h-52 bg-black rounded-3xl shadow-lg">
            <img
                src={url}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
};

export default Card;