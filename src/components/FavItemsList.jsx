import React from "react";
import { RxCross2 } from "react-icons/rx";
const FavItemsList = (props) => {
  const list = props.favItem;
  const handleCrossButton = props.handleCrossButton;

  return (
    <div>
      {list.map((list) => (
        <div key={list.id}>
          <div className="flex gap-2 md:gap-6 justify-between items-center">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-12 md:w-16">
                <img
                  className="w-full h-10 md:h-12 mx-auto overflow-hidden object-cover rounded-lg hover:scale-105 duration-300 cursor-pointer"
                  src={list.image}
                  alt=""
                />
              </div>
              <div>
                <p className="text-[14px] md:text-[18px] font-[600] text-gray-700 line-clamp-1">
                  {list.title}
                </p>
                <div className="flex flex-col xs:flex-row xs:gap-4">
                  <p className="text-[12px] md:text-[14px] text-gray-600 font-[600]">
                    ${list.currentBidPrice}
                  </p>
                  <p className="text-[12px] md:text-[14px] font-[600] text-gray-600">
                    Bids: <span className="font-[700]">{list.bidsCount}</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() =>
                  handleCrossButton(list.id, list.currentBidPrice, list)
                }
                className="cursor-pointer hover:bg-red-100 hover:text-red-600 p-3 rounded-2xl duration-100"
              >
                <RxCross2 size={20} className="md:text-[24px]" />
              </button>
            </div>
          </div>
          <hr className="border-[rgb(220,229,243)] my-2 md:my-4" />
        </div>
      ))}
    </div>
  );
};

export default FavItemsList;