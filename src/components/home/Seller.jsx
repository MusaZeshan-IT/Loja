import React from 'react';
import SellerAccounts from '../../assets/seller.png'

const Seller = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[45px] text-center'>SELLER ACCOUNTS</h2>
            <img className='object-cover h-[800px]' src={SellerAccounts} alt="" />
        </div>
    );
}

export default Seller;
