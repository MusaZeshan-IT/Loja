import React from 'react';
import Img1 from '../../assets/gallery/img1.webp';
import Img2 from '../../assets/gallery/img2.webp';
import Img3 from '../../assets/gallery/img3.jpg';
import Img4 from '../../assets/gallery/img4.webp';
import Img5 from '../../assets/gallery/img5.webp';
import Img6 from '../../assets/gallery/img6.webp';

const Gallery = () => {
    return (
        <div className='h-auto flex lg:flex-row flex-col-reverse pt-32 w-full'>
            <div className='flex flex-col lg:w-[52%]'>
                <img className='h-[350px] w-full object-cover' src={Img1} alt="" />
                <div className='flex sm-custom:flex-row flex-col'>
                    <img className='h-[350px] w-full object-cover' src={Img2} alt="" />
                    <img className='h-[350px] w-full object-cover' src={Img3} alt="" />
                </div>
            </div>
            <div className='flex sm-custom:flex-row flex-col-reverse lg:w-[58%]'>
                <div className='flex flex-col sm-custom:w-[45%] h-[700px]'>
                    <img className='h-[400px] w-full object-cover' src={Img4} alt="" />
                    <img className='h-[300px] w-full object-cover' src={Img5} alt="" />
                </div>
                <img className='h-[700px] sm-custom:w-[55%] object-cover' src={Img6} alt="" />
            </div>
        </div>
    );
}

export default Gallery;
