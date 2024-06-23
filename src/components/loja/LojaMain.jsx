import React from 'react';
import Logo from '../../assets/loja-logo.png';
import { flushSync } from 'react-dom';

const LojaMain = () => {
    return (
        <div className='w-full flex justify-center mt-28'>
            <div className='flex sm-custom:flex-row flex-col sm-custom:items-end items-center'>
                <div className='z-10 rounded-[50%] 2xl:h-[400px] 2xl:w-[400px] xl-custom:h-[380px] xl-custom:w-[380px] xl:h-[360px] xl:w-[360px] md-custom:h-[340px] md-custom:w-[340px] xs:w-[300px] xs:h-[300px] w-[270px] h-[270px] flex justify-center items-center shadow-[0px_0px_20px_rgba(0,0,0,0.2)] bg-[rgb(254,254,254)]'>
                    <img className='h-10/12 w-10/12' src={Logo} alt="" />
                </div>
                <div className='flex flex-col sm-custom:gap-y-10 gap-y-6 mb-10 sm-custom:mt-0 mt-10 sm-custom:relative right-20'>
                    <div className='bg-[rgb(188,142,116)] px-2 xl-custom:w-[75%] xl:w-[70%] sm-custom:w-[65%] w-full flex justify-center py-2'>
                        <h1 className='text-white md-custom:text-[65px] text-[55px] sm-custom:ms-14 leading-[60px] tracking-wide'>LOJA</h1>
                    </div>
                    <div className='bg-[rgb(188,142,116)] xl-custom:px-24 xl:px-20 md-custom:px-12 px-6 w-full flex justify-center py-3'>
                        <h1 className='text-white md-custom:text-[38px] text-[32px] xl:ms-0 md-custom:ms-7 sm-custom:ms-12 tracking-wide font-thin'>MANUFACTURING</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LojaMain;
