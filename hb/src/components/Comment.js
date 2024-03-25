import React from 'react';
import CommentCard from './CommentCard';
export default function Comment() {
  return (
    <div className="w-screen h-screen bg-[#272727] flex justify-center items-center">
      <div className="w-[65%] h-screen">
        <div className="w-full h-[10%] flex justify-start items-center">
          <h1 className="text-3xl semibold">2 Comment</h1>
        </div>
        <div className="flex gap-10 items-center justify-center">
          <CommentCard></CommentCard>
          <CommentCard></CommentCard>
        </div>
        <div className="w-full h-[10%] flex justify-start items-center">
          <h1 className="text-3xl font-semibold">Reviews</h1>
        </div>
        <div class="bg-[#323232] h-60 rounded-lg flex justify-center items-center flex-col">
          <h1 className="w-32 text-sm">
            Not enough reviews to calculate the score
          </h1>
          <div className="flex justify-center items-center mt-6">
            <button
              type="button"
              class="w-40 h-20 p-4 flex items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm text-center "
            >
              Review this game!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 ml-4"
              >
                <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}