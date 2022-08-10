import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col bg-slate-100 justify-center items-center py-14'>
            <img className='h-10' src='../Logo.svg' />
            <ul className='flex py-4'>
                <li className='px-4 text-[#008F95] font-semibold'>Home</li>
                <li className='px-4 text-[#008F95] font-semibold'>Account</li>
                <li className='px-4 text-[#008F95] font-semibold'>Policies</li>
                <li className='px-4 text-[#008F95] font-semibold'>Contact Us</li>
            </ul>
            <p className='text-xs'>Copyright &copy; 2022 All Rights Reserved</p>
        </div>
    );
}

export default Footer;
