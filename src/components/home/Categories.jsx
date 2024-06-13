import React from 'react';
import CategoryCircle from './CategoryCircle';
import Logo from '../../assets/loja-logo.png'

const Categories = () => {
    return (
        <div className='py-32'>
            <h2 className='text-[45px] text-center'>CATEGORIES</h2>
            <div className='flex justify-between mt-6'>
                <CategoryCircle categoryName='Home' iconName='fa-solid fa-house'></CategoryCircle>
                <CategoryCircle categoryName='Clothing' iconName='fa-solid fa-tshirt'></CategoryCircle>
                <CategoryCircle categoryName='Loja Products' imgUrl={Logo}></CategoryCircle>
                <CategoryCircle categoryName='Appliances' iconName='fa-solid fa-lightbulb'></CategoryCircle>
                <CategoryCircle categoryName='Accessories' iconName='fa-solid fa-bag-shopping'></CategoryCircle>
            </div>
        </div>
    );
}

export default Categories;
