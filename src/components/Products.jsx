import React from "react";
import { products } from "../data";
import { ChevronLeft } from "@mui/icons-material";
import { ChevronRight } from '@mui/icons-material';

const Products = () => {
  return (
    <div className="flex flex-col mt-32 items-center">
      <h1 className="text-4xl">Our Products</h1>
      <h2 className="uppercase text-[gray] py-4 text-sm tracking-widest">
        Browse our catalog of dozens of snacks
      </h2>
      <ul className="flex">
        <li className="uppercase px-4 border-x text-[#008F95] hover:underline cursor-pointer underline-offset-2">
          All Products
        </li>
        <li className="uppercase px-4 border-x text-[#008F95] hover:underline cursor-pointer underline-offset-2">
          Cookies
        </li>
        <li className="uppercase px-4 border-x text-[#008F95] hover:underline cursor-pointer underline-offset-2">
          Candy
        </li>
        <li className="uppercase px-4 border-x text-[#008F95] hover:underline cursor-pointer underline-offset-2">
          Noodles
        </li>
        <li className="uppercase px-4 border-x text-[#008F95] hover:underline cursor-pointer underline-offset-2">
          More
        </li>
      </ul>
      <div className="flex flex-wrap w-full justify-center mt-10">
        {products.map((product) => {
          return (
            <div className="flex flex-col items-center w-[calc(100vw/4)] h-[calc(100vw/4)] m-3 product-wrapper">
              <div className="w-[calc(100vw/4)] h-[calc(100vw/5)] overflow-hidden relative product__img">
                <img className="h-full w-full brightness-75" src={product.url} />
                <button className="absolute top-4 right-[5vw] w-[15vw] p-2 z-10 uppercase bg-white hover:bg-black hover:text-white duration-300 product__button opacity-0">Add to Cart</button>
              </div>
              <div className="text-center">
                <h1 className="uppercase">{product.title}</h1>
                <p className="text-[#008F95] font-bold"><span className="line-through text-slate-400 pr-4">${product.originalPrice.toFixed(2)}</span>${product.salePrice.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
        <div className="w-full flex justify-center p-0">
            <div className="w-full max-w-4xl border-2 border-[#06444A] flex justify-between items-center p-0 my-10">
                <h1 className="font-bold bg-[lightgray] px-4 border-[#06444A]">4</h1>
                <h1 className="uppercase text-[#008F95] border-x-2 border-[#06444A] w-full text-center font-semibold">Load More</h1>
                <div className="flex">
                    <ChevronLeft className="!border-[#06444A] border-r"/>
                    <ChevronRight className="!border-[#06444A] border-l"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
