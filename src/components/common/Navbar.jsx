import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/loja-logo.png';

const Navbar = ({ handleOpenNavMenu }) => {
    return (
        <>
            <nav className='lg:flex hidden justify-center gap-14 border-y-2 border-black py-5 tracking-wider'>
                <Link>HOME</Link>
                <Link>CLOTHES</Link>
                <Link>ACCESSORIES</Link>
                <Link>APPLIANCES</Link>
                <Link>LOJA PRODUCTS</Link>
                <Link>ABOUT US</Link>
            </nav>
            <nav className='lg:hidden block'>
                <div className='lg:hidden flex justify-between px-12 items-center border-b-2 border-black py-5 tracking-wider'>
                    <div className='flex gap-4 items-center'>
                        <i onClick={() => handleOpenNavMenu()} className='fa-solid fa-bars text-3xl'></i>
                        <img className='h-[60px]' src={Logo} alt="" />
                    </div>
                    <div className='text-xl flex gap-8'>
                        <Link>CONTACT US</Link>
                        <Link>LOGIN / REGISTER</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;