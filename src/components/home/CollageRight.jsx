import React from 'react';
import Image5 from '../../assets/allClothesImages/IMAGE 5.jpg';
import Image6 from '../../assets/allClothesImages/IMAGE 6.jpg';
import Image7 from '../../assets/allClothesImages/IMAGE 7.jpg';
import Image8 from '../../assets/allClothesImages/IMAGE 8.jpg';
import Image10 from '../../assets/allClothesImages/IMAGE 10.jpg';
import Image11 from '../../assets/allClothesImages/IMAGE 11.jpg';
import Image12 from '../../assets/allClothesImages/IMAGE 12.jpg';
import Image13 from '../../assets/allClothesImages/IMAGE 13.jpg';

const CollageRight = ({ isCollageEnd = false }) => {
    return (
        <>
            {isCollageEnd ? (
                <div className='mt-32 flex lg:flex-row flex-col-reverse lg:gap-x-5 md:gap-y-5'>
                    <div className='flex flex-col-reverse h-full lg:w-[58%] gap-y-5'>
                        <div className='sm:h-[270px] w-full flex sm:flex-row flex-col sm:gap-x-5 gap-y-5'>
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-2/5' src={Image8} alt="" />
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-3/5' src={Image7} alt="" />
                        </div>
                        <img className='lg:h-[270px] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] w-full border-2 border-[#d3d3d3]' src={Image6} alt="" />
                    </div>
                    <div className='md:mb-0 mb-5 border-2 border-[#d3d3d3] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] lg:w-[42%]'>
                        <img className='w-full h-full' src={Image5} alt="" />
                    </div>
                </div>
            ) : (
                <div className='mt-10 flex lg:flex-row flex-col-reverse lg:gap-x-5 md:gap-y-5'>
                    <div className='flex flex-col-reverse h-full lg:w-[58%] gap-y-5'>
                        <div className='sm:h-[270px] w-full flex sm:flex-row flex-col sm:gap-x-5 gap-y-5'>
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-2/5' src={Image13} alt="" />
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-3/5' src={Image12} alt="" />
                        </div>
                        <img className='lg:h-[270px] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] w-full border-2 border-[#d3d3d3]' src={Image11} alt="" />
                    </div>
                    <div className='md:mb-0 mb-5 border-2 border-[#d3d3d3] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] lg:w-[42%]'>
                        <img className='w-full h-full' src={Image10} alt="" />
                    </div>
                </div>
            )}
        </>
    );
}

export default CollageRight;