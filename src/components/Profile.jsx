const Profile = () => {
  return (
    <div className="w-[1220px] flex flex-row items-start justify-start relative max-w-full text-left text-xl text-gray-700 font-poppins">
      <div className="h-[197px] w-full !m-[0] absolute top-[-128px] right-[0px] left-[0px] rounded-xl bg-mintcream-200 overflow-hidden flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[213px] w-[1220px] relative object-cover hidden max-w-full"
          alt=""
          src="/image-159@2x.png"
        />
        <div className="h-[213px] flex-1 relative rounded-xl bg-mintcream-200 overflow-hidden max-w-full z-[1]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            alt=""
            src="/image-159@2x.png"
          />
          <img
            className="absolute top-[-2px] left-[-9px] w-[1229px] h-[168px] object-cover z-[1]"
            alt=""
            src="/image-160@2x.png"
          />
        </div>
      </div>
      <div className="flex-1 bg-floralwhite-200 box-border flex flex-row items-end justify-between pt-9 pb-[31px] pr-[49px] pl-[210px] max-w-full gap-[20px] z-[2] border-[1px] border-solid border-gainsboro-900 lg:flex-wrap lg:pl-[105px] lg:pr-6 lg:box-border mq450:pl-5 mq450:box-border mq750:pl-[52px] mq750:box-border">
        <div className="h-[151px] w-[1220px] relative bg-floralwhite-200 box-border hidden max-w-full border-[1px] border-solid border-gainsboro-900" />
        <div className="w-[573.6px] flex flex-row items-start justify-start gap-[79px] max-w-full mq450:gap-[20px] mq750:flex-wrap mq750:gap-[39px]">
          <div className="flex flex-col items-start justify-start gap-[7px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[1.5px]">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[152px] flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="mr-[-10px] w-[162px] relative leading-[22px] font-medium flex items-center shrink-0 [debug_commit:1de1738] z-[3] mq450:text-base mq450:leading-[17px]">
                    Dr. Bruce Willis
                  </div>
                </div>
                <div className="h-[23px] flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border relative gap-[10px] shrink-0 [debug_commit:1de1738] z-[4]">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/polygon-1.svg"
                  />
                  <img
                    className="h-[13px] w-3.5 absolute !m-[0] top-[4px] left-[3px] overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px] text-mini text-darkolivegreen-100">
              <div className="flex flex-row items-start justify-start py-0 pr-px pl-[1.5px]">
                <div className="relative leading-[16.8px] font-medium inline-block min-w-[100px] z-[3]">
                  Gynecologist
                </div>
              </div>
              <div className="flex flex-row items-start justify-start text-dimgray-100 font-body-1-regular">
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <div className="h-[17px] relative tracking-[-0.01em] leading-[24px] font-semibold flex items-center shrink-0 min-w-[24px] z-[3]">
                    4.2
                  </div>
                </div>
                <div className="h-[22px] w-[38.5px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-5 h-[22px] z-[4]"
                    alt=""
                    src="/stars.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[18.5px] w-5 h-[22px] z-[5]"
                    loading="lazy"
                    alt=""
                    src="/stars-1.svg"
                  />
                </div>
                <img
                  className="h-[22px] w-5 relative min-h-[22px] z-[6]"
                  loading="lazy"
                  alt=""
                  src="/stars-1.svg"
                />
                <img
                  className="h-[22px] w-5 relative min-h-[22px] z-[7]"
                  loading="lazy"
                  alt=""
                  src="/stars-3.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[207px] text-center text-sm text-darkolivegreen-100">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative leading-[16.8px] font-medium inline-block min-w-[65.8px] z-[3]">
                  Followers
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.4px] text-xl text-gray-700">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[39px] z-[3] mq450:text-base mq450:leading-[19px]">
                    850
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[5px]">
                <div className="relative leading-[16.8px] font-medium inline-block min-w-[66.6px] z-[3]">
                  Following
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-4 text-xl text-gray-700">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[34px] z-[3] mq450:text-base mq450:leading-[19px]">
                    18K
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative leading-[16.8px] font-medium inline-block min-w-[37.7px] z-[3]">
                  Posts
                </div>
                <div className="relative text-xl leading-[24px] font-semibold text-gray-700 inline-block min-w-[37.6px] z-[3] mq450:text-base mq450:leading-[19px]">
                  250
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
          <button className="cursor-pointer [border:none] py-[17.5px] px-[33.5px] bg-darkolivegreen-100 rounded-lg overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-seagreen">
            <div className="relative text-xl font-medium font-inter text-white text-left">
              Book an Appointment
            </div>
          </button>
        </div>
      </div>
      <img
        className="h-[159px] w-[159px] absolute !m-[0] top-[-33px] left-[30px] rounded-[50%] object-cover z-[3]"
        loading="lazy"
        alt=""
        src="/ellipse-727@2x.png"
      />
    </div>
  );
};

export default Profile;
