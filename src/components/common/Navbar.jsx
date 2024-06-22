import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/loja-logo.png';

const Navbar = ({ handleOpenNavMenu }) => {
    return (
        <>
            <nav className='lg:flex hidden justify-center gap-14 border-y-2 border-black py-5 tracking-wider'>
                <Link to="/">HOME</Link>
                <Link to="/clothes">CLOTHES</Link>
                <Link>ACCESSORIES</Link>
                <Link>APPLIANCES</Link>
                <Link>LOJA PRODUCTS</Link>
                <Link>ABOUT US</Link>
            </nav>
            <nav className='lg:hidden block'>
                <div className='lg:hidden flex justify-between px-12 items-center border-b-2 border-black py-5 tracking-wider'>
                    <div className='flex xs:justify-normal justify-between xs:w-fit w-full gap-4 items-center'>
                        <i onClick={() => handleOpenNavMenu()} className='xs:block hidden fa-solid fa-bars md:text-3xl sm:tex-2xl text-xl'></i>
                        <img className='md:h-[60px] sm:h-[55px] h-[50px]' src={Logo} alt="" />
                        <i onClick={() => handleOpenNavMenu()} className='xs:hidden inline-block fa-solid fa-bars md:text-3xl sm:tex-2xl 2xs:text-xl text-lg'></i>
                    </div>
                    <div className='text-xl flex gap-8'>
                        <span className='sm-custom:block hidden'>
                            <Link>CONTACT US</Link>
                        </span>
                        <span className='xs:block hidden'>
                            <Link>LOGIN / REGISTER</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;