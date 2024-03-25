export default function AddToCartSection() {
    return (
      <div className="w-full min-h-screen bg-[#272727] bg-[url('https://i.ibb.co/kcC78zq/image.png')] bg-start bg-cover bg-no-repeat flex justify-center items-center flex-col">
        <div className="w-full h-1/5 sm:h-1/4 lg:h-1/6"></div>
        <div className="w-full max-w-screen-lg h-4/5  flex justify-center items-center gap-4">
          <div className="flex justify-center items-center flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-10">
            {' '}
            <img
              src="https://gaming-cdn.com/images/products/15920/616x353/balatro-pc-game-steam-cover.jpg?v=1708442647"
              className="w-80 sm:w-[100vw] lg:w-2/5 h-[30vh] md:rounded-2xl"
            />
            <div className="w-80 sm:w-96 lg:w-1/2 p-10 h-[50vh] backdrop-blur-2xl rounded-2xl flex justify-center items-center flex-col text-sm gap-4">
              <h1 className="text-2xl font-bold">Balatro</h1>
              <button
                className="w-[25vw] sm:w-[25vw] h-12 rounded-full flex justify-center items-center gap-2 p-2"
                style={{ background: 'hsla(0,0%,6%,.3)' }}
              >
                {' '}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/800px-Steam_icon_logo.svg.png"
                  className="w-6 h-6"
                  alt="Steam Logo"
                ></img>
                Steam
                <div className="w-[1px] h-4 bg-gray-500"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="#25de57"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                In stock
                <div className="w-[1px] h-4 bg-gray-500"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="#25de57"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Digital download
              </button>
              <div className="flex justify-center items-center gap-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1942/1942144.png"
                  className="w-4 h-4"
                  alt="Users Icon"
                ></img>
                15 users on this page
              </div>
              <button
                className="w-60 h-12 flex justify-between items-center border border-gray-700 rounded-lg p-4"
                style={{ background: 'hsla(0,0%,100%,.05)' }}
              >
                PC{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <br />
              <div className="w-full h-20 flex justify-center items-center flex-col gap-4">
                <div className="w-full h-20 flex justify-center items-center gap-4">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6h.008v.008H6V6Z"
                      />
                    </svg>
                    <div className="line-through">14€</div>
                  </div>
                  <div className="text-[#ff5400]">-29%</div>
                  <div className="text-4xl">9.99€</div>
                </div>
                <div className="w-full h-26 flex justify-center items-center gap-2">
                  <button className="w-[20%] h-16 bg-[#ff5400] rounded-xl flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <button className="w-[70%] h-16 bg-[#ff5400] rounded-xl flex justify-center items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }