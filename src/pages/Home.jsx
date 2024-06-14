import React, { useState } from 'react';
import StackedCard from '../components/home/StackedCard';
import CardProductList from '../helpers/CardProductList';
import CollageLeft from '../components/home/CollageLeft';
import CollageRight from '../components/home/CollageRight';
import Categories from '../components/home/Categories';
import CoverImage from '../components/home/CoverImage';
import Seller from '../components/home/Seller';

const Home = () => {
    const [images, setImages] = useState(CardProductList());

    // Create an object to store whether a category has been rendered or not
    const renderedCategories = {};

    return (
        <div className='pb-20'>
            <div className='px-20'>
                <CollageLeft />
                <div className='py-32'>
                    <div className='flex gap-16 h-52 w-full'>
                        {images.map((image) => {
                            // Check if the category has already been rendered
                            if (!renderedCategories[image.category]) {
                                renderedCategories[image.category] = true; // Mark the category as rendered
                                return (
                                    <StackedCard
                                        setImages={setImages}
                                        images={images}
                                        image={image}
                                        key={image.id}
                                        category={image.category}
                                    />
                                );
                            }
                            return null; // If category has already been rendered, return null
                        })}
                    </div>
                </div>
                <CollageRight />
                <Categories />
                <Seller />
            </div>
            <CoverImage />
            <div className='px-20'>
                <CollageRight />
            </div>
        </div>
    );
}

export default Home;
