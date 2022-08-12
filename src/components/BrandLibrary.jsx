import React from 'react';
import Carousel from 'react-material-ui-carousel'

const BrandLibrary = () => {
    return (
        <div className='mx-auto my-20'>
            <h1 className='mx-auto my-10 text-center text-4xl uppercase font-bold text-[#06444A]'>Brands</h1>
            <Carousel animation='slide' autoPlay={false} className='w-[50%] mx-auto carousel-wrapper'>
                <div className='flex justify-center'>
                    <img className='w-36 h-28' src='https://th.bing.com/th/id/R.36ae6eff0d9d4d89750025678bee6b70?rik=ErN9jngb4dNgqA&riu=http%3a%2f%2fglobal.glico.com.cn%2fassets%2fimages%2flarge%2flogo-pocky-h.png&ehk=1u%2bX00v6x1KRQH7hbU%2b%2fdbQNNlvDI5g2Zdi%2bITRkCC8%3d&risl=&pid=ImgRaw&r=0' />
                    <img className='w-36 h-28' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/17448a65477955.5af56e3f16d45.jpeg' />
                    <img className='w-36 h-28' src='https://c1.staticflickr.com/4/3168/3060241903_6413704edc_m.jpg' />
                    <img className='w-36 h-28' src='https://th.bing.com/th/id/R.70d5f3b39f6404bc32040e6c3e7fa8e0?rik=vg6iJ0OeHMWmIQ&riu=http%3a%2f%2fwww.vector-logo.net%2flogo_preview%2feps%2fu%2fUlker.png&ehk=0A%2fBaEPA0aB2hL9SwbGw8wK4QiRxuZwTj3ZYZNygipI%3d&risl=&pid=ImgRaw&r=0' />
                </div>
                <div className='flex justify-center'>
                    <img className='w-36 h-28' src='https://th.bing.com/th/id/R.7057847023f4c016958737c36d904326?rik=esKQYECG%2fsJR4A&riu=http%3a%2f%2fwww.theramenrater.com%2fwp-content%2fuploads%2f2013%2f04%2f2013_4_7_mtm_014.jpg&ehk=aC7%2fGCJuJk3iMZMs07FzK19X3kql6bz0rkNVrRiodts%3d&risl=&pid=ImgRaw&r=0' />
                    <img className='w-36 h-28' src='https://download.logo.wine/logo/Parle_Products/Parle_Products-Logo.wine.png' />
                    <img className='w-36 h-28' src='https://th.bing.com/th/id/OIP.NVMtV7EHNepxSd5MDATreAHaFP?pid=ImgDet&rs=1' />
                    <img className='w-36 h-28' src='https://th.bing.com/th/id/R.1c270cc26a2306cb9d6180f4b2d419db?rik=GTtF2wxrgoCW6Q&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2018%2f01%2fold-kit-kat-logo.jpg&ehk=j79udbpMRX2Io%2bx%2bbJRCI5Xpgl6859JDNOnzs4F9XcI%3d&risl=&pid=ImgRaw&r=0' />
                </div>
            </Carousel>
        </div>
    );
}

export default BrandLibrary;