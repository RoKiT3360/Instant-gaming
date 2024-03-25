import React from 'react';

export default function About() {
  return (
    <div className="w-full h-auto lg:h-80 bg-[#272727] flex justify-center items-center">
      <div className="w-4/5 h-full">
        <div className="w-full h-[10%] flex justify-start items-center">
          <h1 className="text-3xl">About</h1>
        </div>
        <div className="w-full h-[90%] flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-1/2  justify-center lg:justify-start items-start flex-col gap-4 hidden md:flex">
            <div className="w-4/5 flex justify-start items-start flex-col text-sm gap-2 ">
              <p className="text-sm text-[#999999] text-justify">
                Balatro is a poker-inspired roguelike deck builder all about
                creating powerful synergies and winning big. Combine valid poker
                hands with unique Joker cards in order to create varied
                synergies and builds. Earn enough chips to beat devious blinds,
                all while uncovering hidden bonus hands and decks as you
                progress. You’re going to need every edge you can get in order
                to reach the boss blind, beat the final ante and secure victory.
                The definitive poker roguelike ...
              </p>
              <p className="underline text-[#999]">Read more</p>
            </div>

            <div className="text-sm text-[#999] flex justify-start items-center gap-2">
              <p>User tags*:</p>
              <div className="h-auto w-auto p-[2px] text-xs border border-[#999] rounded">
                steam deck verified
              </div>
              <div className="h-auto w-auto p-[2px] text-xs border border-[#999] rounded">
                roguelike deckbuilder
              </div>
              <div className="h-auto w-auto p-[2px] text-xs border border-[#999] rounded">
                card game
              </div>
              <div className="h-auto w-auto p-[2px] text-xs border border-[#999] rounded">
                deckbuilding
              </div>
              <div className="h-auto w-auto p-[2px] text-xs border border-[#999] rounded">
                ...
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start flex-col mt-4 lg:mt-0">
            <p className="text-base flex gap-4">
              <span className="text-[#999]">Installation:</span> How to activate
              your game
            </p>
            <p className="text-base flex gap-4">
              <span className="text-[#999]">Developer:</span> LocalThunk
            </p>
            <p className="text-base flex gap-4">
              <span className="text-[#999]">Publisher:</span>Playstack
            </p>
            <p className="text-base flex gap-4">
              <span className="text-[#999]">Release date:</span> 20 February
              2024
            </p>
            <p className="text-base flex gap-4">
              <span className="text-[#999]">Genre:</span> Single-player, Indies,
              Strategy
            </p>
            <p className="text-base flex gap-4">
              <span className="text-[#999]">All Steam reviews:</span>{' '}
              Overwhelmingly 'positive (18105)'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}