import React from 'react';
import CTA from '../shared/CTA';

const CoverImage = ({ isCTA = true, title, margin, bgImgUrl }) => {
    return (
        <div className='w-full bg-cover bg-[#cdc6c0] h-[600px] flex justify-center items-end' style={{ backgroundImage: `url(${bgImgUrl})` }}>
            {isCTA ? (
                <CTA title={title} margin={margin} />
            ) : (
                null
            )}
        </div>
    );
}

export default CoverImage;
