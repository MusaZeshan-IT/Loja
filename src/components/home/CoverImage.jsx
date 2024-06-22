import React from 'react';
import CTA from '../shared/CTA';
// import Image9 from '../../assets/allClothesImages/IMAGE 9.jpg';

const CoverImage = ({ isCTA = true, title, margin }) => {
    return (
        <div className='w-full bg-[#cdc6c0] h-[600px] flex justify-center items-end'>
            {isCTA ? (
                <CTA title={title} margin={margin} />
            ) : (
                null
            )}
        </div>
    );
}

export default CoverImage;
