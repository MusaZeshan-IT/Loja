import React from 'react';
import Img1 from '../../assets/gallery/img1.jpg';
import Img2 from '../../assets/gallery/img2.webp';
import Img3 from '../../assets/gallery/img3.jpg';
import Img4 from '../../assets/gallery/img4.webp';
import Img5 from '../../assets/gallery/img5.jpg';
import Img6 from '../../assets/gallery/img6.webp';

const Gallery = () => {
    // total =660px
    return (
        <div className='h-auto flex lg:flex-row flex-col-reverse pt-32 w-full'>
            <div className='flex flex-col lg:w-[40%]'>
                <div className='h-[350px] overflow-hidden'>
                    <img className='h-[350px] transition-transform duration-300 ease-in-out transform hover:scale-110 w-full object-cover' src={Img1} alt="" />
                </div>
                <div className='flex sm-custom:flex-row flex-col'>
                    <div className='overflow-hidden h-[310px] w-full'>
                        <img className='transition-transform duration-300 ease-in-out transform hover:scale-110 h-[310px] w-full object-cover' src={Img2} alt="" />
                    </div>
                    <div className='overflow-hidden h-[310px] w-full'>
                        <img className='transition-transform duration-300 ease-in-out transform hover:scale-110 h-[310px] w-full object-cover' src={Img3} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex sm-custom:flex-row flex-col-reverse lg:w-[60%]'>
                <div className='flex flex-col sm-custom:w-[50%] h-[660px]'>
                    <div className='overflow-hidden h-[400px] w-full'>
                        <img className='transition-transform duration-300 ease-in-out transform hover:scale-110 h-[400px] w-full object-cover' src={Img4} alt="" />
                    </div>
                    <div className='overflow-hidden h-[260px] w-full'>
                        <img className='transition-transform duration-300 ease-in-out transform hover:scale-110 h-[260px] w-full object-cover' src={Img5} alt="" />
                    </div>
                </div>
                <div className='overflow-hidden h-[660px] sm-custom:w-[50%]'>
                    <img className='transition-transform duration-300 ease-in-out transform hover:scale-110 h-[660px] w-full object-cover' src={Img6} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
