import React from 'react';

export default function Card({ name, img, price }) {
  return (
    <div>
      <div className="w-96 md:w-[20vw]">
        <img className="rounded-lg" src={img} />
        <div className="flex justify-between mt-2">
          <h1 className="text-sm">{name}</h1>
          <h1 className="text-lg">{price}€</h1>
        </div>
      </div>
    </div>
  );
}