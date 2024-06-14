import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex justify-between items-center bg-[#bc8e74] py-3 px-16'>
            <div className='text-white tracking-widest text-[19px]'>
                <span className='me-[75px]'>PAKISTAN</span>
                <span>FREE DELIVERY</span>
            </div>
            <div className='text-white flex gap-x-8'>
                <Link>
                    <i className='fa-brands fa-instagram text-[25px]'></i>
                </Link>
                <Link>
                    <i className='fa-brands fa-facebook text-[25px]'></i>
                </Link>
                <Link>
                    <i className='fa-brands fa-linkedin text-[25px]'></i>
                </Link>
            </div>
        </header>
    );
}

export default Header;