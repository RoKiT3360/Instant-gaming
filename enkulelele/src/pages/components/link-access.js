import { memo, useMemo } from "react";

const LinkAccess = memo(({ divIconPcMaskGroup, pC, propMinWidth }) => {
  const pCStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-6 px-[15px] gap-[10px] mix-blend-normal text-left text-sm-5 text-white font-inter">
      <img
        className="h-5 w-5 relative min-h-[20px]"
        loading="lazy"
        alt=""
        src={divIconPcMaskGroup}
      />
      <div
        className="relative leading-[18px] inline-block min-w-[19px]"
        style={pCStyle}
      >
        {pC}
      </div>
      <img className="h-2.5 w-2.5 relative" loading="lazy" alt="" />
    </div>
  );
});

export default LinkAccess;
