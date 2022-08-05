import React from "react";

const Deal = ({ dealNum, header, save }) => {
  return (
    <div>
      <div
        className={`deal deal-${dealNum} h-[30vh] w-[25vw] flex flex-col items-center justify-center text-white`}
      >
        <h2 className="text-xl uppercase">Shop The New Arrivals</h2>
        <h1 className="text-4xl font-bold mb-4">Save up to 40%</h1>
        <a>
          <button className="border-white border-2 text-white h-10 w-40 hover:bg-white hover:text-black transition-all uppercase bg-opacity-40 bg-black">
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Deal;
