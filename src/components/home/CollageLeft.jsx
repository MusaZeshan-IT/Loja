import React from 'react';

const CollageLeft = () => {
    return (
        <div className='mt-28 flex h-[600px] gap-x-5'>
            <div className='bg-[#cdc6c0] h-full w-[42%]'></div>
            <div className='flex flex-col h-full w-[58%] gap-y-5'>
                <div className='bg-[#cdc6c0] h-full w-full'></div>
                <div className='h-full w-full flex gap-x-5'>
                    <div className='bg-[#cdc6c0] h-full w-3/5'></div>
                    <div className='bg-[#cdc6c0] h-full w-2/5'></div>
                </div>
            </div>
        </div>
    );
}

export default CollageLeft;