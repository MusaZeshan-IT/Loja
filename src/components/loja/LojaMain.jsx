import React from 'react';
import Logo from '../../assets/loja-logo.png';

const LojaMain = () => {
    return (
        <div className='w-full flex justify-center mt-28'>
            <div className='flex items-end'>
                <div className='z-10 rounded-[50%] h-[400px] w-[400px] flex justify-center items-center shadow-[0px_0px_20px_rgba(0,0,0,0.2)] bg-[rgb(254,254,254)]'>
                    <img className='h-10/12 w-10/12' src={Logo} alt="" />
                </div>
                <div className='flex flex-col gap-y-10 mb-10 relative right-20'>
                    <div className='bg-[rgb(188,142,116)] px-2 w-[75%] flex justify-center py-2'>
                        <h1 className='text-white text-[65px] ms-14 leading-[60px] tracking-wide'>LOJA</h1>
                    </div>
                    <div className='bg-[rgb(188,142,116)] px-24 flex justify-center py-3'>
                        <h1 className='text-white text-[38px] tracking-wide font-thin'>MANUFACTURING</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LojaMain;
