import React from "react";

const DayDeals = () => {
  return (
    <div className="flex flex-col mt-32 items-center max-w-6xl mx-auto">
      <h1 className="text-4xl">Deals of the Day</h1>
      <h2 className="uppercase text-[gray] py-4 text-sm tracking-widest">
        Seize the opportunity on incredible savings. Only for a limited time!
      </h2>
      <div className="flex w-full text-center mt-10 day-deals">
        <div className="w-[50%] bg-slate-100 p-4 mx-4 flex flex-col items-center justify-center day-deal">
          <h1 className="text-4xl">Noodles</h1>
          <h2 className="text-[gray] py-4 text-sm tracking-widest">
            We are just getting started in the wide world of noodles. Enjoy a
            variety of flavors and have these international noodles shipped from
            our US based store to anywhere in the world.
          </h2>
          <div className="w-[80%] flex flex-wrap justify-between">
            <img className="w-[30%] py-2 brightness-90" src="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p596_i4_w750.jpeg" />
            <img className="w-[30%] py-2 brightness-90" src="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p597_i6_w750.jpeg" />
            <img className="w-[30%] py-2 brightness-90" src="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p598_i6_w750.jpeg" />
            <img className="w-[30%] py-2 brightness-90" src="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p600_i7_w750.jpeg" />
            <img className="w-[30%] py-2 brightness-90" src="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p422_i4_w573.jpeg" />
            <img className="w-[30%] py-2 brightness-90" src="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p961_i7_w634.jpeg" />
          </div>
        </div>
        <div className="w-[50%] bg-slate-100 p-4 mx-4 flex justify-center relative day-deal">
            <img className="w-full p-10 bg-white" src="https://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p355_i3_w1000.jpeg" />
            <div className="absolute flex border-2 border-[#008F95] w-[80%] justify-between text-center mt-4">
                <p className="flex flex-col w-full text-[#008F95] border-r-2 border-[#008F95] p-2"><span className="text-black">00</span>Days</p>
                <p className="flex flex-col w-full text-[#008F95] border-r-2 border-[#008F95] p-2"><span className="text-black">00</span>Hours</p>
                <p className="flex flex-col w-full text-[#008F95] border-r-2 border-[#008F95] p-2"><span className="text-black">00</span>Minutes</p>
                <p className="flex flex-col w-full text-[#008F95]  p-2"><span className="text-black">00</span>Seconds</p>
            </div>
            <div className="absolute flex bottom-10">
                <div className="text-center">
                    <h1 className="uppercase font-semibold text-[#06444A]">Bourbon choco and coffee biscuits</h1>
                    <p className="text-[#008F95] font-bold"><span className="line-through text-slate-400 pr-4">$4.00</span>$1.00</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DayDeals;
