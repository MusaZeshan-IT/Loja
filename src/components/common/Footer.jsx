import React from 'react';
import Logo from '../../assets/loja-logo.png'
import FooterCard from './FooterCard';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#bc8e74] text-white 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12 py-8 mt-28'>
            <div className='flex lg:flex-row flex-col justify-between'>
                <div className='lg:block flex md:flex-row flex-col gap-y-32 justify-between'>
                    <img className='h-20 w-40' src={Logo} alt="" />
                    <div>
                        <h3 className='lg:mt-20 text-[22px]'>MENU</h3>
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
                </div>
                <div className=''>
                    <div className='flex gap-x-3 lg:justify-end relative lg:bottom-0 md:bottom-20 bottom-72'>
                        <Link>
                            <div className='bg-[#cdc6c0] rounded-[50%] h-10 w-10 flex justify-center items-center'>
                                <i className='fa-brands fa-instagram text-[26px]'></i>
                            </div>
                        </Link>
                        <Link>
                            <div className='bg-[#cdc6c0] rounded-[50%] h-10 w-10 flex justify-center items-center'>
                                <i className='fa-brands fa-square-facebook text-[26px]'></i>
                            </div>
                        </Link>
                        <Link>
                            <div className='bg-[#cdc6c0] rounded-[50%] h-10 w-10 flex justify-center items-center'>
                                <i className='fa-brands fa-linkedin-in text-[26px]'></i>
                            </div>
                        </Link>
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