import React from 'react';
import Card from './Card';

const data = {
  one: {
    img: 'https://gaming-cdn.com/images/products/2434/380x218/slay-the-spire-pc-mac-game-steam-cover.jpg?v=1711036800',
    name: 'Slay the Spire',
  },
  two: {
    img: 'https://gaming-cdn.com/images/products/2434/380x218/slay-the-spire-pc-mac-game-steam-cover.jpg?v=1711036800',
    name: 'Slay the Spire',
  },
  three: {
    img: 'https://gaming-cdn.com/images/products/2434/380x218/slay-the-spire-pc-mac-game-steam-cover.jpg?v=1711036800',
    name: 'Slay the Spire',
  },
  four: {
    img: 'https://gaming-cdn.com/images/products/2434/380x218/slay-the-spire-pc-mac-game-steam-cover.jpg?v=1711036800',
    name: 'Slay the Spire',
  },
  five: {
    img: 'https://gaming-cdn.com/images/products/2434/380x218/slay-the-spire-pc-mac-game-steam-cover.jpg?v=1711036800',
    name: 'Slay the Spire',
  },
  six: {
    img: 'https://gaming-cdn.com/images/products/2434/380x218/slay-the-spire-pc-mac-game-steam-cover.jpg?v=1711036800',
    name: 'Slay the Spire',
  },
  seven: {
    img: 'https://gaming-cdn.com/images/products/2434/380x218/slay-the-spire-pc-mac-game-steam-cover.jpg?v=1711036800',
    name: 'Slay the Spire',
  },
};

export default function Product() {
  return (
    <div className="w-screen h-[110vh] md:h-[60vh] lg:[110vh] bg-[#272727] flex justify-center items-center">
      <div className="w-[70%] h-screen">
        <div className="w-full h-[5%] flex justify-start items-center">
          <h1 className="text-3xl semibold">Similar Products</h1>
        </div>
        <div className="w-full flex lg:overflow-visible overflow-scroll md:grid md:h-60 grid-cols-3 gap-4 ">
          {Object.values(data).map((el, index) => (
            <Card key={index} name={el.name} img={el.img} price="9.99" />
          ))}
        </div>
      </div>
    </div>
  );
}