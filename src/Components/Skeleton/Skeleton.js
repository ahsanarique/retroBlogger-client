import React from "react";

const Skeleton = () => {
  return (
    <div className="shadow rounded-md p-4 w-full col-span-12 lg:col-span-4 sm:col-span-6 opacity-50 ">
      <div className="animate-pulse bg-gray-500 h-48 w-full"></div>
      <div className="animate-pulse bg-gray-500 mt-5 h-10 rounded-full py-3 px-6"></div>
      <div className="animate-pulse bg-gray-500 mt-5 h-4 rounded-full py-3 px-6"></div>
      <div className="animate-pulse bg-gray-500 mt-5 h-4 rounded-full py-3 px-6"></div>
      <div className="animate-pulse bg-gray-500 mt-5 h-4 rounded-full py-3 px-6"></div>
      <div className="animate-pulse bg-gray-500 mt-5 h-4 rounded-full py-3 px-6"></div>
    </div>
  );
};

export default Skeleton;
