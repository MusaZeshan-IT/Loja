import React from 'react';
import Image1 from '../../assets/allClothesImages/IMAGE 1.jpg';
import Image2 from '../../assets/allClothesImages/IMAGE 2.jpg';
import Image3 from '../../assets/allClothesImages/IMAGE 3.jpg';
import Image4 from '../../assets/allClothesImages/IMAGE 4.jpg';

const CollageLeft = () => {
    return (
        <div className='mt-28 flex h-[600px] gap-x-5'>
            <div className='border border-[#e6e6e6] h-full w-[42%]'>
                <img className='w-full h-full' src={Image1} alt="" />
            </div>
            <div className='flex flex-col h-full w-[58%] gap-y-5'>
                <img className='h-[50%] w-full border border-[#e6e6e6]' src={Image2} alt="" />
                <div className='h-[50%] w-full flex gap-x-5'>
                    <img className='border border-[#e6e6e6] h-full w-3/5 overflow-hidden' src={Image3} alt="" />
                    <img className='border border-[#e6e6e6] h-full w-2/5' src={Image4} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CollageLeft;