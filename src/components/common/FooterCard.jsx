import React from 'react';

const FooterCard = () => {
    return (
        <div className='bg-[#cdc6c02a] rounded-3xl mt-14 p-9 flex flex-col justify-center items-center'>
            <h4 className='text-[22px] tracking-wide'>LOREM IPSUM SIT AMETERO IRSEO</h4>
            <p className='text-[18px] mt-4 tracking-wider'>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Mauris sed nulla integer
            </p>
            <div className='flex gap-x-4'>
                <button className='text-[13px] bg-white text-black px-5 py-3 rounded-3xl mt-5 font-semibold tracking-widest'>READ MORE</button>
                <button className='text-[13px] bg-white text-black px-6 py-4 rounded-3xl mt-5 font-semibold tracking-widest'>SUBSCRIBE</button>
            </div>
        </div>
    );
}

export default FooterCard;
