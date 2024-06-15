import React from 'react';
import Image1 from '../../assets/allClothesImages/IMAGE 1.jpg';
import Image2 from '../../assets/allClothesImages/IMAGE 2.jpg';
import Image3 from '../../assets/allClothesImages/IMAGE 3.jpg';
import Image4 from '../../assets/allClothesImages/IMAGE 4.jpg';

const CollageLeft = () => {
    return (
        <div className='mt-28 flex lg:flex-row flex-col lg:gap-x-5 gap-y-5'>
            <div className='border-2 border-[#d3d3d3] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] lg:w-[42%]'>
                <img className='w-full h-full' src={Image1} alt="" />
            </div>
            <div className='flex flex-col h-full lg:w-[58%] gap-y-5'>
                <img className='lg:h-[270px] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] w-full border-2 border-[#d3d3d3]' src={Image2} alt="" />
                <div className='sm:h-[270px] w-full flex sm:flex-row flex-col sm:gap-x-5 gap-y-5'>
                    <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-3/5' src={Image3} alt="" />
                    <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-2/5' src={Image4} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CollageLeft;