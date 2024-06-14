import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex justify-between items-center bg-[#bc8e74] py-3 lg:px-16 md-custom:px-14 md:px-12 sm-custom:px-10 sm:px-8 px-6'>
            <div className='text-white tracking-widest md:text-[19px] sm:text-[17px] xs:text-[15px] text-[14px]'>
                <span className='lg:me-[75px] md-custom:me-[65px] md:me-[55px] sm-custom:me-[45px] sm:me-[35px] xs-custom:me-[25px] me-[20px]'>PAKISTAN</span>
                <span>FREE DELIVERY</span>
            </div>
            <div className='text-white flex sm:gap-x-8 xs:gap-x-6 gap-x-4 md:text-[25px] sm-custom:text-[23px] sm:text-[22px] xs-custom:text-[20px] xs:text-[19px] text-[17px]'>
                <Link>
                    <i className='fa-brands fa-instagram'></i>
                </Link>
                <Link>
                    <i className='fa-brands fa-facebook'></i>
                </Link>
            </div>
        </header>
    );
}

export default Header;