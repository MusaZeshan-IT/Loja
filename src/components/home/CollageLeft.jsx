import React from 'react';
import Image1 from '../../assets/collageLeft/img1.webp';
import Image2 from '../../assets/collageLeft/img2.webp';
import Image3 from '../../assets/collageLeft/img3.jpg';
import Image4 from '../../assets/collageLeft/img4.webp';

const CollageLeft = () => {
    return (
        <div className='mt-28 flex lg:flex-row flex-col lg:gap-x-5 gap-y-5'>
            <div className='sm:h-[600px] xs-custom:h-[400px] 2xs-custom:h-[350px] h-[240px] lg:w-[40%]'>
                <img className='w-full h-full object-cover' src={Image1} alt="" />
            </div>
            <div className='flex flex-col h-full lg:w-[60%] gap-y-5'>
                <img className='lg:h-[310px] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] w-full' src={Image2} alt="" />
                <div className='sm:h-[270px] w-full flex sm:flex-row flex-col sm:gap-x-5 gap-y-5'>
                    <img className='sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-[58%] object-cover' src={Image3} alt="" />
                    <img className='sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-[42%] object-cover' src={Image4} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CollageLeft;