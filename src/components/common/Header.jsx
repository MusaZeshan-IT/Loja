import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center bg-[#bc8e74] py-2 px-16'>
            <div className='text-white tracking-widest text-lg'>
                <span className='me-20'>PAKISTAN</span>
                <span>FREE DELIVERY</span>
            </div>
            <div className='text-white'>
                <i className='fa-brands fa-instagram text-2xl me-10'></i>
                <i className='fa-brands fa-facebook text-2xl'></i>
            </div>
        </header>
    );
}

export default Header;