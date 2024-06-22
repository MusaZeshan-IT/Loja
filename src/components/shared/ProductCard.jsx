import React from 'react';

const ProductCard = ({ name, price, imgUrl }) => {
    return (
        <div>
            <div className='bg-[#d3d3d3] h-[400px]'>
            </div>
            <div className='flex justify-between mt-5 items-center'>
                <div>
                    <p className='text-xl tracking-wide'>{name}</p>
                    <p className='font-semibold text-xl'>{price}$</p>
                </div>
                <button className='flex justify-center items-center border border-blue-900 hover:bg-blue-700 hover:text-white rounded-md px-3 py-[5px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]' type='button'>
                    <span className='text-[11.5px] tracking-widest me-2'>ADD TO CART</span>
                    <i className='fa-solid fa-shopping-cart text-sm'></i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
