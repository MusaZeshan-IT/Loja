import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-center gap-14 border-y-2 border-black py-5 tracking-wider'>
            <Link>HOME</Link>
            <Link>CLOTHES</Link>
            <Link>ACCESSORIES</Link>
            <Link>APPLIANCES</Link>
            <Link>LOJA PRODUCTS</Link>
            <Link>ABOUT US</Link>
        </nav>
    );
}

export default Navbar;