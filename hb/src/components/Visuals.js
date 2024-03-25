import React from 'react';

export default function Visuals() {
  return (
    <div className="w-screen min-h-screen bg-[#272727] flex justify-center items-center">
      <div className="w-[80vw] h-full max-w-screen-lg">
        <div className="w-full h-1/6 flex justify-start items-center">
          <h1 className="text-3xl font-semibold">Visuals</h1>
        </div>
        <div className="w-full h-5/6 flex flex-col justify-center items-center gap-4">
          <div className="w-full lg:w-[80%] lg:h-full lg:mr-2">
            <img
              className="rounded-lg w-full h-full"
              src="https://i.ibb.co/VTFnLgQ/image.png?fbclid=IwAR2W2HKRyzqO6FGfaBmTRSl6QR4-oaduV7FgK4Yq9cEclcfncd45BUj7tr0https://i.ibb.co/VTFnLgQ/image.png?fbclid=IwAR2yP1FmNSlHROFHB6_znwm6XdVKDaKv5fHlXdE1svwsAEHv58xB8QhDpv0"
              alt="Visual 1"
            />
          </div>
          <div className="w-full lg:w-[80%] lg:h-full grid grid-cols-2 gap-6">
            <div>
              <img
                className="rounded-lg w-full"
                src="https://gaming-cdn.com/images/products/15920/screenshot/balatro-pc-game-steam-wallpaper-1-big.jpg?v=1708442647"
                alt="Visual 2"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img
                className="rounded-lg w-full"
                src="https://gaming-cdn.com/images/products/15920/screenshot/balatro-pc-game-steam-wallpaper-2-thumbv2.jpg?v=1708442647"
                alt="Visual 3"
              />
              <img
                className="rounded-lg w-full"
                src="https://gaming-cdn.com/images/products/15920/screenshot/balatro-pc-game-steam-wallpaper-3-thumbv2.jpg?v=1708442647"
                alt="Visual 4"
              />
              <img
                className="rounded-lg w-full"
                src="https://gaming-cdn.com/images/products/15920/screenshot/balatro-pc-game-steam-wallpaper-4-thumbv2.jpg?v=1708442647"
                alt="Visual 5"
              />
              <img
                className="rounded-lg w-full"
                src="https://gaming-cdn.com/images/products/15920/screenshot/balatro-pc-game-steam-wallpaper-2-thumbv2.jpg?v=1708442647"
                alt="Visual 6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}