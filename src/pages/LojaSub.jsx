import React from 'react';
import CoverImage from '../components/shared/CoverImage';
import ProductCard from '../components/shared/ProductCard';
import CTA from '../components/shared/CTA';
import ClothesList from '../helpers/ClothesList';
import CategoryCard from '../components/shared/CategoryCard';

//Images
import ClothesBgImage from '../assets/coverImages/clothes-cover.jpg';
import ClothesCatImg1 from '../assets/clothes/women/orange-white-shalwar.jpg';
import ClothesCatImg2 from '../assets/clothes/men/gray-kameez.jpg';
import ClothesCatImg3 from '../assets/accessories/img1.webp';

const LojaSub = () => {

    return (
        <div>
            <div className='2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 px-16'>
                <div className='py-28'>
                    <div className='grid lg-custom:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-24 gap-y-24'>
                        {ClothesList().map((p) => {
                            return (
                                <ProductCard key={p.id} name={p.name} price={p.price} bgimgUrl={p.url} />
                            )
                        })}
                    </div>
                    <div className='w-full flex justify-center mt-14'>
                        <CTA title="SHOW MORE" />
                    </div>
                </div>
            </div>
            <CoverImage isCTA={false} />
            <div className='2xl:px-16 xl-custom:px-14 md:px-10 px-12'>
                <div className='grid md:grid-cols-3 sm-custom:grid-cols-2 grid-cols-1 mt-28 gap-16'>
                    <CategoryCard bgImgUrl={ClothesCatImg1} name="WOMEN'S CLOTHES" />
                    <CategoryCard bgImgUrl={ClothesCatImg2} name="MENS'S CLOTHES" />
                    <CategoryCard bgImgUrl={ClothesCatImg3} name="ACCESSORIES" />
                </div>
            </div>
        </div>
    );
}

export default LojaSub;
