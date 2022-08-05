import React from 'react';
import Deal from './Deal';

const Deals = () => {
    return (
        <div className='flex overflow-hidden w-full'>
            <Deal dealNum={'1'}/>
            <Deal dealNum={'2'}/>
            <Deal dealNum={'3'}/>
            <Deal dealNum={'4'}/>
        </div>
    );
}

export default Deals;
