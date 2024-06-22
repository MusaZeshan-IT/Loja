import React from 'react';

const ProductCard = ({ name, price, imgUrl }) => {
    return (
        <div>
            <div className='bg-[#d3d3d3] h-[400px]'>
            </div>
            <div className='flex 2xs-custom:flex-row flex-col justify-between mt-5 items-center'>
                <div className='2xs-custom:block flex'>
                    <p className='text-xl tracking-wide 2xs-custom:me-0 me-5'>{name}</p>
                    <p className='font-semibold text-xl'>{price}$</p>
                </div>
                <button className='2xs-custom:mt-0 mt-5 flex justify-center items-center border border-blue-900 hover:bg-blue-700 hover:text-white rounded-md px-3 py-[5px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]' type='button'>
                    <span className='text-[11.5px] tracking-widest me-2'>ADD TO CART</span>
                    <i className='fa-solid fa-shopping-cart text-sm'></i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
