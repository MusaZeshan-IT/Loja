import React from 'react';

const CollageRight = ({ isCollageEnd = false }) => {
    return (
        <>
            {isCollageEnd ? (
                <div className='mt-32 flex lg:flex-row flex-col-reverse lg:gap-x-5 md:gap-y-5'>
                    <div className='flex flex-col h-full lg:w-[58%] gap-y-5'>
                        <div className='sm:h-[270px] w-full flex sm:flex-row flex-col sm:gap-x-5 gap-y-5'>
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-2/5' src={''} alt="" />
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-3/5' src={''} alt="" />
                        </div>
                        <img className='lg:h-[270px] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] w-full border-2 border-[#d3d3d3]' src={''} alt="" />
                    </div>
                    <div className='md:mb-0 mb-5 border-2 border-[#d3d3d3] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] lg:w-[42%]'>
                        <img className='w-full h-full' src={''} alt="" />
                    </div>
                </div>
            ) : (
                <div className='mt-10 flex lg:flex-row flex-col-reverse lg:gap-x-5 md:gap-y-5'>
                    <div className='flex flex-col h-full lg:w-[58%] gap-y-5'>
                        <div className='sm:h-[270px] w-full flex sm:flex-row flex-col sm:gap-x-5 gap-y-5'>
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-2/5' src={''} alt="" />
                            <img className='border-2 border-[#d3d3d3] sm:h-full 2xs-custom:h-[340px] h-[240px] sm:w-3/5' src={''} alt="" />
                        </div>
                        <img className='lg:h-[270px] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] w-full border-2 border-[#d3d3d3]' src={''} alt="" />
                    </div>
                    <div className='md:mb-0 mb-5 border-2 border-[#d3d3d3] sm:h-[560px] xs-custom:h-[400px] 2xs-custom:h-[320px] h-[240px] lg:w-[42%]'>
                        <img className='w-full h-full' src={''} alt="" />
                    </div>
                </div>
            )}
        </>
    );
}

export default CollageRight;