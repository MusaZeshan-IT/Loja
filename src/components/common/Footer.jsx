import React from 'react';
import Logo from '../../assets/loja-logo.png'
import FooterCard from './FooterCard';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#bc8e74] text-white px-20 py-8 mt-28'>
            <div className='flex justify-between'>
                <div className=''>
                    <img className='h-20' src={Logo} alt="" />
                    <h3 className='mt-20 text-[22px]'>MENU</h3>
                    <div className='flex gap-x-20 border-t-2 w-[300px] pt-7 mt-7 text-[16.2px]'>
                        <div className='flex flex-col gap-y-3'>
                            <h4><Link>HOME</Link></h4>
                            <h4><Link>ABOUT</Link></h4>
                            <h4><Link>CLOTHES</Link></h4>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h4><Link>ACCESSORIES</Link></h4>
                            <h4><Link>APPLIANCES</Link></h4>
                            <h4><Link>LOJA PRODUCTS</Link></h4>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex gap-x-3 justify-end'>
                        <div className='bg-[#cdc6c0] rounded-[50%] h-10 w-10 flex justify-center items-center'>
                            <i className='fa-brands fa-instagram text-[26px]'></i>
                        </div>
                        <div className='bg-[#cdc6c0] rounded-[50%] h-10 w-10 flex justify-center items-center'>
                            <i className='fa-brands fa-square-facebook text-[26px]'></i>
                        </div>
                        <div className='bg-[#cdc6c0] rounded-[50%] h-10 w-10 flex justify-center items-center'>
                            <i className='fa-brands fa-linkedin-in text-[26px]'></i>
                        </div>
                    </div>
                    <FooterCard />
                </div>
            </div>
            <div className='mt-20 border-t pt-6'>
                <p className='tracking-[0.6px]'>&copy; All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;