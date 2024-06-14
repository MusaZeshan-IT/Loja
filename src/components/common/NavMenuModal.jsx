import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/loja-logo.png';

const NavMenuModal = ({ showNavMenu, handleCloseNavMenu }) => {
    if (showNavMenu) {
        return (
            <div className='lg:hidden block z-10 fixed inset-0 bg-black bg-opacity-50 h-full w-full'>
                <div className='bg-white flex'>
                    <nav className='flex flex-col justify-center gap-14 py-5 tracking-wider'>
                        <img className='h-20 ps-5' src={Logo} alt="" />
                        <div className='flex flex-col gap-y-8 ps-10 text-lg'>
                            <Link>HOME</Link>
                            <Link>CLOTHES</Link>
                            <Link>ACCESSORIES</Link>
                            <Link>APPLIANCES</Link>
                            <Link>LOJA PRODUCTS</Link>
                            <Link>ABOUT US</Link>
                        </div>
                    </nav>
                    <i className='mt-5 fa-solid fa-xmark text-3xl cursor-pointer' onClick={() => handleCloseNavMenu()}></i>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default NavMenuModal;
