import React from 'react';
import CategoryCircle from './CategoryCircle';

const Categories = () => {
    return (
        <div className='py-32'>
            <h2 className='text-[45px] text-center'>CATEGORIES</h2>
            <div className='flex justify-between mt-12'>
                <CategoryCircle></CategoryCircle>
                <CategoryCircle></CategoryCircle>
                <CategoryCircle></CategoryCircle>
                <CategoryCircle></CategoryCircle>
                <CategoryCircle></CategoryCircle>
            </div>
        </div>
    );
}

export default Categories;
