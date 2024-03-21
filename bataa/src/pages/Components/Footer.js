import React from "react";

export default function Footer() {
    return(
        <div className="w-full h-[40vh] flex bg-black justify-center">
            <div className="w-[70%] h-full flex flex-col">
                <div className="w-full h-[75%] flex justify-between items-center mt-5">
                    <div className="w-[25%] h-full flex flex-col">
                        <img className="max-w-[160px]" src="https://www.iepfinancial.co.uk/wp-content/uploads/2018/06/trustpilot_logo_white.png"></img>
                        <p className="text-white text-sm">TrustScore 4.7  689,662 reviews</p>
                    </div>
                    <div className="w-[25%] h-full flex flex-col gap-3">
                        <a className="text-white hover:text-orange-500">Terms of Use</a>
                        <a className="text-white hover:text-orange-500">Privacy policy</a>
                        <a className="text-white hover:text-orange-500">Contact us</a>
                        <a className="text-white hover:text-orange-500">Redeem a Gift Card</a>
                        <a className="text-white hover:text-orange-500">Find the latest video game news</a>
                    </div>
                    <div className="w-[50%] h-full">
                        <div className="h-[50%] w-full flex gap-1">
                            <div className="w-16 h-16 rounded-full bg-red-300"></div>
                            <div className="w-16 h-16 rounded-full bg-red-300"></div>
                            <div className="w-16 h-16 rounded-full bg-red-300"></div>
                            <div className="w-16 h-16 rounded-full bg-red-300"></div>
                            <div className="w-16 h-16 rounded-full bg-red-300"></div>
                            <div className="w-16 h-16 rounded-full bg-red-300"></div>
                            <div className="w-16 h-16 rounded-full bg-red-300"></div>
                        </div>
                        <div className="h-[50%] w-full flex justify-end gap-5">
                            <button className="w-32 h-16 rounded text-white border hover:bg-zinc-800">App Store</button>
                            <button className="w-32 h-16 rounded text-white border hover:bg-zinc-800">Google Play</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[0.1px] opacity-20 bg-white"></div>
                <div className="w-full h-[20%] flex justify-between items-center">
                    <div className="text-white">Copyright © 2024 Instant Gaming - All rights reserved</div>
                    <div className="flex w-[30%] text-white grid grid-cols-3 divide-x">
                        <div className="flex justify-center">Mongolia</div>
                        <div className="flex justify-center">English</div>
                        <div className="flex justify-center">EUR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}