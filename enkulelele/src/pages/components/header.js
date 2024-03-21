import { memo } from "react";
import LinkAccess from "./link-access";

const Header = memo(() => {
  return (
    <header className="w-[1920px] flex flex-row items-start justify-center pt-0 px-5 pb-[5px] box-border max-w-full text-left text-lgi text-gray-300 font-barlow">
      <div className="w-[600px] flex flex-col items-start justify-start gap-[13px] max-w-full mq750:w-0">
        <nav className="m-0 self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full mq750:hidden">
          <nav className="m-0 w-[366px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-sm-5 text-white font-inter">
            <div className="flex flex-row items-start justify-start opacity-[0.8] mix-blend-normal">
              <div className="relative leading-[18px] inline-block min-w-[57px]">
                Trending
              </div>
            </div>
            <div className="flex flex-row items-start justify-start opacity-[0.8] mix-blend-normal">
              <div className="relative leading-[18px] inline-block min-w-[69px]">
                Pre-orders
              </div>
            </div>
            <div className="flex flex-row items-start justify-start opacity-[0.8] mix-blend-normal">
              <div className="relative leading-[18px] inline-block min-w-[65px]">
                Upcoming
              </div>
            </div>
            <div className="flex flex-row items-start justify-start opacity-[0.8] mix-blend-normal">
              <div className="relative leading-[18px] inline-block min-w-[85px] whitespace-nowrap">
                Support 24/7
              </div>
            </div>
          </nav>
        </nav>
        <div className="self-stretch h-[66px] relative mix-blend-normal max-w-full">
          <div className="absolute top-[0px] left-[0px] rounded-16xl bg-darkslategray w-full h-full flex flex-row items-start justify-end mix-blend-normal max-w-full">
            <div className="self-stretch w-[66px] rounded-61xl [background:linear-gradient(10deg,_#ff8000,_rgba(0,_0,_0,_0)),_#ff4020] flex flex-row items-start justify-start pt-[21.59999999999991px] pb-[21.600000000000136px] pr-0 pl-[5px] box-border relative mix-blend-normal z-[2]">
              <div className="self-stretch flex-1 relative leading-[22.8px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                Minecraft, RPG, multiplayer...
              </div>
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                loading="lazy"
                alt=""
                src="/background-images.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] h-[68px] flex flex-row items-start justify-start py-0 px-5 box-border mix-blend-normal z-[1] text-sm-5 text-white font-inter">
            <LinkAccess
              divIconPcMaskGroup="/div-iconpc-mask-group.svg"
              pC="PC"
            />
            <LinkAccess
              divIconPcMaskGroup="/div-iconplaystation-mask-group.svg"
              pC="Playstation"
              propMinWidth="71px"
            />
            <LinkAccess
              divIconPcMaskGroup="/div-iconxbox-mask-group.svg"
              pC="Xbox"
              propMinWidth="33px"
            />
            <LinkAccess
              divIconPcMaskGroup="/div-iconswitch-mask-group.svg"
              pC="Nintendo"
              propMinWidth="59px"
            />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
