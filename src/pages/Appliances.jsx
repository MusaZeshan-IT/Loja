import React from 'react';
import CoverImage from '../components/shared/CoverImage';
import ProductCard from '../components/shared/ProductCard';
import CTA from '../components/shared/CTA';
import AppliancesList from '../helpers/AppliancesList';
import CategoryCard from '../components/shared/CategoryCard';

//Images
import AppliancesCatImg1 from '../assets/appliances/fridge.jpg';
import AppliancesCatImg2 from '../assets/appliances/modern-tap.jpg';
import AppliancesCatImg3 from '../assets/appliances/smart-appliances/vivo.jpg';

const Appliances = () => {

    return (
        <div>
            <div className='mt-14'>
                <CoverImage title="SHOP NOW" margin="0px 0px 30px 0px" />
            </div>
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12'>
                <div className='py-28'>
                    <div className='grid lg-custom:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-24'>
                        {AppliancesList().map((p) => {
                            return (
                                <ProductCard key={p.id} name={p.name} bgimgUrl={p.url} price={p.price} />
                            )
                        })}
                    </div>
                    <div className='w-full flex justify-center mt-14'>
                        <CTA title="SHOW MORE" />
                    </div>
                </div>
            </div>
            <CoverImage isCTA={false} />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12'>
                <div className='grid md:grid-cols-3 sm-custom:grid-cols-2 grid-cols-1 mt-28 gap-16'>
                    <CategoryCard name="HOME APPLIANCES" bgImgUrl={AppliancesCatImg1} />
                    <CategoryCard name="OFFICE APPLIANCES" bgImgUrl={AppliancesCatImg2} />
                    <CategoryCard name="SMART APPLIANCES" bgImgUrl={AppliancesCatImg3} />
                </div>
            </div>
        </div>
    );
}

export default Appliances;
