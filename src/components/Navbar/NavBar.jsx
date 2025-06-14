import React, { useState } from "react";
import logo from "../../assets/AuctionGallery.png";
import { IoMdNotifications } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <div className="relative">
      {/* Desktop NavBar */}
      <div className="flex justify-between py-4 items-center cursor-pointer">
        <div className="w-[120px] md:w-[150px]">
          <img src={logo} alt="Auction Gallery Logo" className="w-full" />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[16px] font-[500]">
          <li className="hover:text-blue-500 cursor-pointer duration-200">
            Home
          </li>
          <li className="hover:text-blue-500 cursor-pointer duration-200">Auctions</li>
          <li className="hover:text-blue-500 cursor-pointer duration-200">Categories</li>
          <li className="hover:text-blue-500 cursor-pointer duration-200">How it Works</li>
        </ul>
        
        {/* Desktop User Icons */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <div>
            <IoMdNotifications size={32} className="hover:text-blue-500 cursor-pointer" />
          </div>
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User avatar" />
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="avatar">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User avatar" />
            </div>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20 py-4 rounded-b-lg">
          <ul className="flex flex-col gap-3 px-4">
            <li className="hover:text-blue-500 cursor-pointer duration-200 py-2 border-b">
              Home
            </li>
            <li className="hover:text-blue-500 cursor-pointer duration-200 py-2 border-b">Auctions</li>
            <li className="hover:text-blue-500 cursor-pointer duration-200 py-2 border-b">Categories</li>
            <li className="hover:text-blue-500 cursor-pointer duration-200 py-2">How it Works</li>
          </ul>
          <div className="flex items-center gap-4 mt-4 px-4 pt-2 border-t">
            <IoMdNotifications size={24} className="hover:text-blue-500 cursor-pointer" />
            <span className="text-sm">Notifications</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;