import { memo } from "react";

const DivMainContent = memo(() => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start py-12 px-5 box-border gap-[60px] mix-blend-normal max-w-full z-[1] text-left text-mini text-white font-inter mq750:gap-[30px_60px] mq750:pt-[31px] mq750:pb-[31px] mq750:box-border">
      <div className="w-[1200px] flex flex-col items-center justify-start gap-[62px] mix-blend-normal max-w-full lg:gap-[31px_62px] mq750:gap-[15px_62px]">
        <img
          className="self-stretch h-[250px] rounded-3xs max-w-full overflow-hidden shrink-0 object-cover mix-blend-normal"
          alt=""
          src="/image@2x.png"
        />
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[21px] box-border gap-[14px] mix-blend-normal max-w-full">
          <b className="relative leading-[21px]">Next random draw</b>
          <div className="w-[518px] flex flex-row flex-wrap items-center justify-center py-0 px-[5px] box-border gap-[10px] mix-blend-normal max-w-full text-21xl text-orangered">
            <div className="rounded-6xs bg-gray-200 flex flex-col items-start justify-start py-[15px] px-[30px] gap-[5px] mix-blend-normal">
              <b className="relative leading-[50px] inline-block min-w-[54px] mq450:text-5xl mq450:leading-[30px] mq1050:text-13xl mq1050:leading-[40px]">
                03
              </b>
              <b className="relative text-base-5 leading-[23px] inline-block text-white min-w-[41px]">
                Days
              </b>
            </div>
            <div className="rounded-6xs bg-gray-200 flex flex-col items-start justify-start py-[15px] px-[30px] gap-[5px] mix-blend-normal">
              <b className="relative leading-[50px] inline-block min-w-[48px] mq450:text-5xl mq450:leading-[30px] mq1050:text-13xl mq1050:leading-[40px]">
                10
              </b>
              <b className="relative text-base-5 leading-[23px] inline-block text-white min-w-[49px]">
                Hours
              </b>
            </div>
            <div className="flex-1 rounded-6xs bg-gray-200 flex flex-col items-start justify-start py-[15px] px-[29px] box-border gap-[5px] mix-blend-normal min-w-[81px]">
              <b className="relative leading-[50px] inline-block min-w-[52px] mq450:text-5xl mq450:leading-[30px] mq1050:text-13xl mq1050:leading-[40px]">
                32
              </b>
              <b className="relative text-base-5 leading-[23px] inline-block text-white min-w-[66px]">
                Minutes
              </b>
            </div>
            <div className="flex-1 rounded-6xs bg-gray-200 flex flex-col items-start justify-start py-[15px] px-[30px] box-border gap-[5px] mix-blend-normal min-w-[85px]">
              <b className="relative leading-[50px] inline-block min-w-[45px] mq450:text-5xl mq450:leading-[30px] mq1050:text-13xl mq1050:leading-[40px]">
                12
              </b>
              <b className="relative text-base-5 leading-[23px] inline-block text-white min-w-[71px]">
                Seconds
              </b>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[17px] px-[31px] bg-[transparent] rounded-6xs [background:linear-gradient(10deg,_#ff8000,_rgba(0,_0,_0,_0)),_#ff4020] flex flex-row items-center justify-start mix-blend-normal hover:bg-tomato">
          <b className="relative text-base-1 leading-[21px] inline-block font-inter text-white text-left min-w-[87px]">
            Participate
          </b>
        </button>
      </div>
      <div className="relative text-sm-5 leading-[18px] text-dimgray inline-block min-w-[108px]">
        Terms of Service
      </div>
    </div>
  );
});

export default DivMainContent;
