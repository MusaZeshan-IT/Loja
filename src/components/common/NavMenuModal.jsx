import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/loja-logo.png';

const NavMenuModal = ({ showNavMenu, handleCloseNavMenu }) => {
    if (showNavMenu) {
        return (
            <div className='lg:hidden block z-20 fixed inset-0 bg-black bg-opacity-50 h-full w-full'>
                <div className='bg-white p-10 flex justify-between'>
                    <div>
                        <nav className='flex flex-col justify-center gap-14 py-5 tracking-wider'>
                            <img className='h-20 w-48' src={Logo} alt="" />
                            <div className='ms-6 flex flex-col gap-y-8 text-2xl font-semibold'>
                                <Link>HOME</Link>
                                <Link>CLOTHES</Link>
                                <Link>ACCESSORIES</Link>
                                <Link>APPLIANCES</Link>
                                <Link>LOJA PRODUCTS</Link>
                                <Link>ABOUT US</Link>
                            </div>
                        </nav>
                    </div>
                    <div className='mt-8 rounded-[50%] flex justify-center items-center bg-black h-10 w-10 p-2'>
                        <i className='fa-solid fa-xmark text-3xl cursor-pointer text-white' onClick={() => handleCloseNavMenu()}></i>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default NavMenuModal;
