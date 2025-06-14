import React from "react";
import logo from "../../src/assets/AuctionGallery.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-14 gap-5">
        <div className="w-[180px]">
            <img src={logo} alt="" />
        </div>
        <nav className="grid grid-flow-col gap-4 font-[500] text-[16px]">
          <a className="link link-hover">Bid.</a>
          <a className="link link-hover">Win.</a>
          <a className="link link-hover">Own.</a>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auctions</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How to works</a>
        </nav>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by AuctionHub.
          </p>
          <p>
            Developed by : <span className="font-semibold text-gray-600 underline"><a href="">Md:Shakil Ahamed</a></span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;