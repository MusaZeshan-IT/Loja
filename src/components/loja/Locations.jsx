import React from 'react';
import LocationCard from './LocationCard';
import SiddqueTradeCenter from '../../assets/locations/siddque-trade-center.jpg';
import ImperialMall from '../../assets/locations/imperial-mall.jpg';
import XinhuaMall from '../../assets/locations/xinhua-mall.jpg';

const Locations = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-items-center'>
            <LocationCard name="SIDDIQUE TRADE CENTER" imgUrl={SiddqueTradeCenter} />
            <LocationCard name="IMPERIAL MALL" imgUrl={ImperialMall} />
            <LocationCard name="XINHUA MALL" imgUrl={XinhuaMall} />
        </div>
    );
}

export default Locations;
