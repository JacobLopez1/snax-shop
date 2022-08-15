import React from "react";
import BestSellingProduct from "./BestSellingProduct";

const BestSelling = () => {
  return (
    <div className="w-full bg-slate-100  mt-32">
      <div className="flex flex-col items-center max-w-6xl mx-auto p-8">
        <h1 className="text-4xl">Best Selling</h1>
        <h2 className="uppercase text-[gray] py-4 text-sm tracking-widest">
          Our most popular products of the week!
        </h2>
        <div className="flex flex-wrap my-10">
          <BestSellingProduct
            name="Bourbon Choco and Coffee Biscuits"
            originalPrice={4}
            salePrice={1}
            url="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p355_i3_w1000.jpeg"
          />
          <BestSellingProduct
            name="Gilco Pocky Cookies and Cream"
            originalPrice={4}
            salePrice={3.6}
            url="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p762_i11_w750.jpeg"
          />
          <BestSellingProduct
            name="Lotte Koala's March Chocolate"
            originalPrice={2.5}
            salePrice={2.25}
            url="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p1012_i11_w750.jpeg"
          />
          <BestSellingProduct
            name="Hapi Bing Bing Chocolate"
            originalPrice={6}
            salePrice={5.4}
            url="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p1066_i8_w750.jpeg"
          />
          <BestSellingProduct
            name="CaramBar Caramel L'original"
            originalPrice={1.5}
            salePrice={1.35}
            url="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p885_i9_w750.jpeg"
          />
          <BestSellingProduct
            name="Ottogi Ppushu Ppushu BBQ Flavor"
            originalPrice={2.5}
            salePrice={1.35}
            url="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
