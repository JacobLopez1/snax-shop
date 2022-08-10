import React from 'react';
import Carousel from 'react-material-ui-carousel'

const BrandLibrary = () => {
    return (
        <div className='mx-auto my-20'>
            <h1 className='mx-auto my-10 text-center text-4xl uppercase font-bold text-[#06444A]'>Brands</h1>
            <Carousel animation='slide' autoPlay={false} className='w-[50%] mx-auto carousel-wrapper'>
                <div className='flex justify-center'>
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                </div>
                <div className='flex justify-center'>
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                    <img className='w-36' src='https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg' />
                </div>
            </Carousel>
        </div>
    );
}

export default BrandLibrary;