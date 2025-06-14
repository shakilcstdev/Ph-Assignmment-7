import React from "react";
import heroBg from "../assets/Banner-min.jpg";
const HeroPart = () => {
  return (
    <div>
      <div
        className="m"
        style={{
          backgroundImage: `url(${heroBg}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className=" text-white h-full ">
          <div className="max-w-7xl px-3 mx-auto py-[200px]">
            <h1 className="text-[35px] font-[600] ">
              Bid on Unique Items from <br />
              Around the World
            </h1>
            <p className="text-[16px] font-[400] opacity-60">
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="rounded-[35px] font-[500] bg-white text-gray-800  px-3 py-2 mt-5 border-none hover:text-blue-600 duration-300 cursor-pointer ">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart;