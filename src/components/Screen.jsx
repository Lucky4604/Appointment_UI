import { useMemo } from "react";

const Screen = ({ propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div style={{borderRadius:"30px"}}
      className="w-[356px] rounded-11xl bg-oldlace shadow-[0px_4px_12.5px_rgba(0,_0,_0,_0.07)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[153px] pb-6 pr-[30px] pl-[35px] gap-[32px] min-w-[356px] max-w-full text-left text-13xl text-darkslategray-300 font-nunito border-[1px] border-solid border-gainsboro-200 mq450:gap-[16px] mq450:min-w-full mq725:pt-[99px] mq725:pb-5 mq725:box-border mq975:flex-1"
      
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[21px]">
        <div className="w-[274px] flex flex-row items-start justify-center py-0 px-5 box-border">
          <div className="flex flex-row items-start justify-start relative">
            <img
              className="h-[150px] w-[149px] absolute !m-[0] top-[-126px] left-[-47px] rounded-[50%] object-cover"
              alt=""
              src="/screen.svg"
            />
            <button className="cursor-pointer [border:none] py-1 px-3 bg-[transparent] rounded-mid [background:linear-gradient(180deg,_#0b0b0b,_rgba(11,_11,_11,_0.79))] overflow-hidden flex flex-row items-start justify-start gap-[4px] z-[1]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative text-base tracking-[-0.01em] leading-[18px] font-dinpro-bold text-white text-left inline-block min-w-[22px]">
                  4.5
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/star.svg"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start  justify-start gap-[16px]">
        <h1 className="m-0 left-10 relative text-13xl tracking-[-0.01em] leading-[28px] font-bold font-nunito text-darkslategray-300 text-left mq450:text-lgi mq450:leading-[17px] mq975:text-7xl mq975:leading-[22px]">
         Dr. Prerna Narang
        </h1>
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px] text-base text-dimgray-100">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-[21px] gap-[7px]">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/link.svg"
                />
                <div className="relative tracking-[-0.01em] leading-[20px]">
                  Male-Female Infertility
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/stud.svg"
                />
                <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                  7 years of Experience
                </div>
              </div>
              <div className=" flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="h-4 w-[18px]"
                  alt=""
                  src="/com.svg"
                />
                <div className="relative tracking-[-0.01em] leading-[20px]">
                  Speaks: English, Hindi, Marathi
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-2 gap-[8px] text-sm text-darkslategray-200 mq450:flex-wrap">
              <div className="flex-1 rounded-3xs bg-oldlace box-border flex flex-col items-center justify-start pt-1.5 px-[7px] pb-[3px] gap-[4px] min-w-[102px] border-[1px] border-solid border-darkolivegreen-200">
                <div className="relative tracking-[-0.01em] leading-[20px] font-semibold inline-block min-w-[120px]">
                  Video Consultation
                </div>
                <b className="relative tracking-[-0.01em] leading-[20px] inline-block text-darkolivegreen-100 min-w-[34px] whitespace-nowrap">
                  ₹800
                </b>
              </div>
              <div className="flex-1 rounded-3xs bg-oldlace box-border flex flex-col items-center justify-start pt-1.5 px-[7px] pb-[3px] gap-[4px] min-w-[97px] border-[1px] border-solid border-darkolivegreen-200">
                <div className="relative tracking-[-0.01em] leading-[20px] font-semibold inline-block min-w-[113px]">
                  Chat Consultation
                </div>
                <b className="relative tracking-[-0.01em] leading-[20px] inline-block text-darkolivegreen-100 min-w-[28px]">
                  Free
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[1.5px]">
            <button className="cursor-pointer py-[9px] px-5 bg-white flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-center whitespace-nowrap border-[1px] border-solid border-darkolivegreen-100 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-seagreen">
              <div className="relative text-base tracking-[-0.01em] leading-[20px] font-semibold font-nunito text-darkolivegreen-100 text-left inline-block min-w-[88px]">
                View Profile
              </div>
            </button>
          </div>
          <button className="cursor-pointer [border:none] py-[16.5px] px-[72.5px] bg-darkolivegreen-100 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-seagreen mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative text-base tracking-[-0.01em] leading-[20px] font-semibold font-nunito text-white text-left">
              Book a consultation
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
