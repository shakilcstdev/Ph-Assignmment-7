import { useEffect, useState } from "react";
import { FaCheck, FaHeartBroken, FaRegHeart } from "react-icons/fa";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar/navbar";
import HeroPart from "./components/HeroPart";

import Footer from "./components/Footer";

import NoFavorite from "./components/NoFavorite";
import FavItemsList from "./components/FavItemsList";
import Blogs from "./components/Blogs";







function App() {
  const [blog, setBlog] = useState([]);
  const [favItem, setFavItem] = useState([]);
  const [sumBidPrice, setSumBidPrice] = useState(0);
  const [favoritedIds, setFavoritedIds] = useState([]);
  
  
  const toastStyles = {
    success: {
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 176, 155, 0.2)',
        color: 'white',
        fontWeight: 'bold',
      },
      progressStyle: {
        background: 'rgba(255, 255, 255, 0.7)'
      },
      icon: <FaCheck size={24} />
    },
    error: {
      style: {
        background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(255, 95, 109, 0.2)',
        color: 'white',
        fontWeight: 'bold',
      },
      progressStyle: {
        background: 'rgba(255, 255, 255, 0.7)'
      },
      icon: <FaHeartBroken size={24} />
    }
  };

  const handleHeartButton = (blog, currentBidPrice) => {
    setFavItem([...favItem, blog]);
    setSumBidPrice(sumBidPrice + currentBidPrice);
    setFavoritedIds([...favoritedIds, blog.id]);
    
    toast.dismiss();
    
    toast.success(`${blog.title} is added in Favorite Items List.`, {
      icon: toastStyles.success.icon,
      style: toastStyles.success.style,
      progressStyle: toastStyles.success.progressStyle,
      toastId: `success-${blog.id}` 
    });
  };

  const handleCrossButton = (id, price, blog) => {
    const remainingFavItem = favItem.filter((list) => list.id !== id)
    setFavItem(remainingFavItem);
    setSumBidPrice(sumBidPrice - price);
    
    const updatedFavoritedIds = favoritedIds.filter(itemId => itemId !== id);
    setFavoritedIds(updatedFavoritedIds);
    
    toast.dismiss();
    
    toast.error(`${blog.title} is Removed from Favorite Items List.`, {
      icon: toastStyles.error.icon,
      style: toastStyles.error.style,
      progressStyle: toastStyles.error.progressStyle,
      toastId: `error-${id}` 
    });
  };

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar></NavBar>
      </div>
      <div>
        <HeroPart></HeroPart>
      </div>

      {/* Main Part */}
      <div className="bg-[#EBF0F5]">
        <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-[22px] md:text-[26px] text-[#0E2954] font-bold">Active Auctions</h1>
          <p className="text-sm md:text-base">Discover and bid on extraordinary items</p>

          {/* Responsive grid - changes to 1 column on mobile, 3 columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 md:gap-6">
            {/* Auction items table - full width on mobile, 2/3 width on larger screens */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden order-2 md:order-1">
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-4">
                <table className="table responsive-table ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="px-2 md:px-4">Items</th>
                      <th className="px-2 md:px-4">Current Bid</th>
                      <th className="px-2 md:px-4">Time Left</th>
                      <th className="px-2 md:px-4">Bid Now</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {/* row 1 */}
                    {blog.map((blog) => (
                      <Blogs
                        blog={blog}
                        key={blog.id}
                        handleHeartButton={handleHeartButton}
                        isFavorited={favoritedIds.includes(blog.id)}
                      ></Blogs>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="order-1 md:order-2 mb-4 md:mb-0">
              <div className="rounded-2xl bg-white p-4">
                <div className="flex gap-2 justify-center items-center font-[600] text-[20px] md:text-[24px] text-[#0E2954]">
                  <FaRegHeart />
                  <h1>Favorite Items</h1>
                </div>
                <hr className="border-[rgb(220,229,243)] mt-1" />
                <div className="py-4 md:py-6">
                  {favItem.length == 0 ? (
                    <NoFavorite></NoFavorite>
                   
                  ) : (
                    <FavItemsList
                      favItem={favItem}
                      handleCrossButton={handleCrossButton}
                    ></FavItemsList>
                  )}
                </div>
                <hr className="border-[rgb(220,229,243)] mb-1" />
                <div className="flex justify-between items-center text-[18px] md:text-[22px] font-semibold">
                  <h1 className="text-gray-600">Total bids Amount</h1>
                  <p>${sumBidPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>

      <ToastContainer 
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop
        closeOnClick 
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}
        className="toast-container"
        enableMultiContainer={false}
      />
      
    </div>
  );
}

export default App;
