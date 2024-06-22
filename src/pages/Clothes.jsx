import React from 'react';
import CoverImage from '../components/home/CoverImage';
import ProductCard from '../components/shared/ProductCard';
import CTA from '../components/shared/CTA';
import ClothesList from '../helpers/ClothesList';
import CategoryCard from '../components/shared/CategoryCard';

const Clothes = () => {


    return (
        <div>
            <h1 className='mt-14 text-[40px] font-semibold text-center'>CLOTHES</h1>
            <div className='mt-14'>
                <CoverImage title="SHOP NOW" margin="0px 0px 30px 0px" />
            </div>
            <div className='2xl:px-16 xl-custom:px-14 md:px-10 px-12'>
                <div className='grid md:grid-cols-3 sm-custom:grid-cols-2 grid-cols-1 mt-28 gap-16'>
                    <CategoryCard name="WOMEN'S CLOTHES" />
                    <CategoryCard name="MENS'S CLOTHES" />
                    <CategoryCard name="KIDS'S CLOTHES" />
                </div>
            </div>
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12'>
                <div className='py-28'>
                    <div className='grid lg-custom:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-24'>
                        {ClothesList().map((p) => {
                            return (
                                <ProductCard key={p.id} name={p.name} price={p.price} />
                            )
                        })}
                    </div>
                    <div className='w-full flex justify-center mt-14'>
                        <CTA title="SHOW MORE" />
                    </div>
                </div>
            </div>
            <CoverImage isCTA={false} />
        </div>
    );
}

export default Clothes;
