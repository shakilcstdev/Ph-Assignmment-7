import React from "react";
import { FaRegHeart, FaHeart  } from "react-icons/fa";
const Blogs = ({blog, handleHeartButton, isFavorited}) => {

  let {image, title, currentBidPrice, timeLeft} = blog;
  return (
    <tr>
      <th className="flex items-center gap-2 md:gap-6">
        <div className="w-10 md:w-14">
          <img className="w-full h-10 md:h-12 mx-auto overflow-hidden object-cover rounded-lg hover:scale-105 duration-300 cursor-pointer" src={image} alt="" />
        </div>
        <p className="text-[13px] md:text-[15px] font-[500] text-gray-600 line-clamp-2">{title}</p>
      </th>
      <td className="font-[600] text-gray-700 text-[14px] md:text-[16px]">
        ${currentBidPrice}
      </td>
      <td className="text-[12px] md:text-[14px]">{timeLeft}</td>
      <td className="pl-1 md:pl-4">
        <button 
          disabled={isFavorited} 
          onClick={() => {
            handleHeartButton(blog, currentBidPrice)
          }} 
          className={`${isFavorited ? ' cursor-not-allowed' : ' cursor-pointer'}`}
        >
        {
          !isFavorited ? <FaRegHeart size={18} className="md:text-[22px]" /> : <FaHeart size={18} className="md:text-[22px]" color="red"/>
        }
        </button>
      </td>
    </tr>
  );
};

export default Blogs;