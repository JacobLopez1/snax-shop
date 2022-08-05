import React from 'react';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined'
const Landing = () => {
    return (
        <div className='landing h-[100vh] text-center flex flex-col justify-center items-center relative'>
            <h1 className='text-white uppercase text-4xl font-bold'>A better way to shop</h1>
            <p className='text-[whitesmoke] text-2xl max-w-xl my-4'>With over 100 products from 12+ countries, you're bound to find something that will satisfy your cravings.</p>
            <a href=""><button className='border-white border-2 text-white h-10 w-40 hover:bg-white hover:text-black transition-all uppercase bg-opacity-40 bg-black'>Shop Now</button></a>
            <MouseOutlinedIcon className='absolute bottom-10 text-white animate-bounce h-10'/>
        </div>
    );
}

export default Landing;
