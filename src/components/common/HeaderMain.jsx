import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/loja-logo.png'

const HeaderMain = () => {
    return (
        <header className='flex justify-between items-center py-5 px-52'>
            <span className='text-xl'>
                <Link>CONTACT US</Link>
            </span>
            <img className='h-[70px]' src={Logo} alt="" />
            <span className='text-xl'>
                <Link>LOGIN / REGISTER</Link>
            </span>
        </header>
    );
}

export default HeaderMain;