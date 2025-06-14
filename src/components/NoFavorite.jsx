import React from "react";

const NoFavorite = () => {
  return (
    <div className="flex flex-col justify-center items-center py-2 md:py-4">
      <h2 className="text-gray-700 text-[16px] md:text-[20px] font-[600] mb-1">No favorites yet</h2>
      <p className="text-center px-2 md:px-10 text-[12px] md:text-[14px] text-gray-500 font-[400]">
        Click the heart icon on any item to add it to your favorites
      </p>
    </div>
  );
};

export default NoFavorite;