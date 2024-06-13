import React from 'react';
import CategoryCircle from './CategoryCircle';

const Categories = () => {
    return (
        <div className='py-32'>
            <h2 className='text-[45px] text-center'>CATEGORIES</h2>
            <div className='flex justify-between mt-12'>
                <CategoryCircle categoryName='Home' iconName='fa-solid fa-house'></CategoryCircle>
                <CategoryCircle categoryName='Clothing' iconName='fa-solid fa-tshirt'></CategoryCircle>
                <CategoryCircle categoryName='Appliances' iconName='fa-solid fa-lightbulb'></CategoryCircle>
                <CategoryCircle categoryName='Accessories' iconName='fa-solid fa-headphones'></CategoryCircle>
                <CategoryCircle categoryName='Loja Products' iconName='fa-solid fa-store'></CategoryCircle>
            </div>
        </div>
    );
}

export default Categories;
