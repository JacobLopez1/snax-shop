import React from 'react';
import StarIcon from '@mui/icons-material/Star'
import AddIcon from '@mui/icons-material/Add'

const BestSellingProduct = ( {name, originalPrice, salePrice, url }) => {
    return (
        <div className='w-[calc(100%/3)] flex p-4 best-selling-product'>
            <img src={url} className="w-[50%] brightness-90" />
            <div className="w-[50%] flex flex-col items-center justify-center px-2">
                <p className='text-xs uppercase text-center'>{name}</p>
                <p className='text-center text-[#008F95] font-bold'><span className='text-slate-300 line-through pr-4'>${originalPrice.toFixed(2)}</span>${salePrice.toFixed(2)}</p>
                <div className='flex text-[#ffd700]'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <button className='flex border-2 p-1 uppercase border-black bg-white rounded-lg my-1 hover:invert duration-[250ms] transition-all'>
                    <AddIcon />
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
}

export default BestSellingProduct;
