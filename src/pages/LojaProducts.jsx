import React from 'react';
import LojaMain from '../components/loja/LojaMain';
import CategoryCard from '../components/shared/CategoryCard';

//Images
import ClothesCatImg1 from '../assets/clothes/women/orange-white-shalwar.jpg';
import ClothesCatImg2 from '../assets/clothes/men/gray-kameez.jpg';
import ClothesCatImg3 from '../assets/accessories/img1.webp';
import CTA from '../components/shared/CTA';
import Gallery from '../components/home/Gallery';
import SellerCTA from '../components/loja/SellerCTA';
import Locations from '../components/loja/Locations';
import CoverImage from '../components/home/CoverImage';
import { Link } from 'react-router-dom';

const LojaProducts = () => {
    return (
        <>
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12'>
                <LojaMain />
                <div className='grid md:grid-cols-3 sm-custom:grid-cols-2 grid-cols-1 mt-28 gap-16'>
                    <CategoryCard bgImgUrl={ClothesCatImg1} name="WOMEN'S CLOTHES" />
                    <CategoryCard bgImgUrl={ClothesCatImg2} name="MENS'S CLOTHES" />
                    <CategoryCard bgImgUrl={ClothesCatImg3} name="ACCESSORIES" />
                </div>
                <div className='w-full flex justify-center'>
                    <CTA title="OWN BY LOJA" margin="50px 0 0 0" />
                </div>
            </div>
            <Link to="/loja-products-sub">
                <Gallery />
            </Link>
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12 py-32'>
                <SellerCTA />
                <Locations />
            </div>
            <CoverImage isCTA={false} />
        </>
    );
}

export default LojaProducts;
