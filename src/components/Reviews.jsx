import { useMemo } from "react";

const Reviews = ({
  consultedForSkinCare,
  mightBeBitEarlyToConfirmB,
  propWidth,
  propDisplay,
}) => {
  const consultedForSkinStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className="w-[601px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full text-left text-xl text-darkslategray-400 font-body-1-regular">
      <div className="flex-1 rounded-mid bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[21px] px-[35px] pb-[22px] box-border gap-[4.7px] max-w-full z-[1]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
          <div className="w-[255px] flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
              <img
                className="h-14 w-[54px] relative rounded-21xl overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-2608514@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[125px]">
                <div className="self-stretch relative font-semibold mq450:text-base">
                  Alicent Hightower
                </div>
                <div
                  className="relative text-base font-medium text-gray-200"
                  style={consultedForSkinStyle}
                >
                  {consultedForSkinCare}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2px]">
              <img
                className="h-[20.3px] w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <img
                className="h-[20.3px] w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <img
                className="h-[20.3px] w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
              <img
                className="h-[20.3px] w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
              <img
                className="h-[20.3px] w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/icon-2.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0 text-base text-darkgray">
            <div className="relative tracking-[-0.01em] leading-[18px] inline-block min-w-[119px]">
              20 January 2023
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base tracking-[-0.01em] leading-[24px] text-neutrals-900">
          {mightBeBitEarlyToConfirmB}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
