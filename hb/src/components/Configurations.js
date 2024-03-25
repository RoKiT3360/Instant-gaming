import React from 'react';

export default function Configurations() {
  return (
    <div className="w-screen h-[70vh] bg-[#272727] flex justify-center items-center">
      <div className="w-screen max-w-screen-lg px-4">
        <div className="w-full h-1/6 flex justify-start items-center">
          <h1 className="text-3xl">Configurations</h1>
        </div>
        <h1 className="text-md text-white font-mono mt-6">minimum*</h1>
        <br />
        <div>
          <div className="w-[80vw] h-5/6 flex flex-col lg:flex-row justify-start items-start">
            <div className="w-full lg:w-1/2 flex justify-center items-start flex-col mb-6 lg:mb-0">
              <div className="w-full h-auto flex justify-start items-center">
                <p className="text-sm text-[#999]">OS *:</p>
                <p className="text-sm ml-2 text-[#999]">
                  Windows 7, 8, 10, 11 x64
                </p>
              </div>
              <div className="w-full h-auto flex justify-start items-center">
                <p className="text-sm text-[#999]">Processor:</p>
                <p className="text-sm ml-2 text-[#999]">Intel Core i3</p>
              </div>
              <div className="w-full h-auto flex justify-start items-center">
                <p className="text-sm text-[#999]">Memory:</p>
                <p className="text-sm ml-2 text-[#999]">1 GB RAM</p>
              </div>
              <div className="w-full h-auto flex justify-start items-center">
                <p className="text-sm text-[#999]">Graphics:</p>
                <p className="text-sm ml-2 text-[#999]">
                  OpenGL 2.1 compatible graphics card, integrated graphics
                </p>
              </div>
              <div className="w-full h-auto flex justify-start items-center">
                <p className="text-sm text-[#999]">Storage:</p>
                <p className="text-sm ml-2 text-[#999]">
                  150 MB available space
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-start flex-col">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}