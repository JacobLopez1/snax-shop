import React from 'react';
import Deal from './Deal';

const Deals = () => {
    return (
        <div className='flex overflow-hidden w-full'>
            <Deal dealNum={'1'} header="Shop the new arrivals" save="Save up to 40%!" />
            <Deal dealNum={'2'} header="Happy Cookie Day!" save="10% off all cookie cart!" />
            <Deal dealNum={'3'} header="Special offer on candy" save="Buy one, get one free!" />
            <Deal dealNum={'4'} header="Now carrying noodles" save="Huge savings!" />
        </div>
    );
}

export default Deals;
