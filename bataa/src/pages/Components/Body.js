import React from "react";

export default function Body() {
  return (
    <div className="w-full h-[400vh] flex flex-col bg-zinc-800 text-white gap-5">
      <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-3">
        <div className="w-[70%] h-[10%] flex items-center">
          <p className="flex justify-self-start text-3xl">Trending</p>
        </div>
        <div className="w-[70%] h-[90%] grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-3 md:grid-rows-3">
        <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden lg:flex"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden lg:flex"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden md:flex"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden md:flex"></div>
        </div>
      </div>
      <div className="w-full h-[20vh] bg-zinc-900 flex justify-center items-center">
        <div className="w-[70%] h-full flex grid grid-cols-4 gap-2">
          <div className="bg-red-300"></div>
          <div className="bg-red-300"></div>
          <div className="bg-red-300"></div>
          <div className="bg-red-300"></div>
        </div>
      </div>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-3">
        <div className="w-[70%] h-[10%] flex items-center">
          <p className="flex justify-self-start text-3xl">Pre-orders</p>
        </div>
        <div className="w-[70%] h-[90%] grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-3 md:grid-rows-3">
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden lg:flex"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden lg:flex"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden md:flex"></div>
          <div className="bg-red-500 min-w-[260px] rounded-xl hidden md:flex"></div>
        </div>
      </div>
      <div className="w-full h-[80vh] flex flex-col items-center px-5 gap-4">
        <div className="w-[70%] h-[10%] flex text-3xl">Gamer reviews</div>
        <div className="w-full h-[60%] grid grid-cols-2 gap-1 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-red-300 rounded-xl max-w-[380px] min-w-[340px]"></div>
            <div className="bg-red-300 rounded-xl max-w-[380px] min-w-[340px]"></div>
            <div className="bg-red-300 rounded-xl max-w-[380px] min-w-[340px] hidden lg:flex"></div>
            <div className="bg-red-300 rounded-xl max-w-[380px] min-w-[340px] hidden xl:flex"></div>
        </div>
      </div>
      <div className="w-full h-[30vh] bg-zinc-700 flex justify-center items-center">
        <div className="w-[30%] flex flex-col h-full"></div>
      </div>
    </div>
  );
}
