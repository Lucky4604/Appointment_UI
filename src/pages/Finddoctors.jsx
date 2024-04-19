import Navbar from "../components/Navbar";
import Screen from "../components/Screen";

const Docktor = () => {
  return (
    <form className="m-0 w-[1440px] bg-white max-w-full overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[303px] box-border leading-[normal] tracking-[normal]">
      <Navbar/>
      <section style={{backgroundColor:"#EAF2EA"}}   className="self-stretch h-[221px] bg-primary-tint-2 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[95px] px-[107px] pb-[125px] box-border gap-[20px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pt-[62px] mq725:px-[53px] mq725:pb-[81px] mq725:box-border mq975:h-auto">
        <div className="mt-[-198px] self-stretch h-[178px] flex flex-row items-start justify-start pt-[154px] px-0 pb-0 box-border gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div style={{backgroundColor:"#CFEBCF"}} className="mt-[-160px] h-[184px] w-[184px] relative rounded-[50%] bg-beige" />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border max-w-[calc(100%_-_400px)] shrink-0">
            <h1 className="m-0 self-stretch relative text-13xl tracking-[0.01em] leading-[24px] capitalize font-medium font-gotham-rounded text-black text-center mq450:text-lgi mq450:leading-[14px] mq975:text-7xl mq975:leading-[19px]">Find expert Doctors for an In-clinic session here </h1>
          </div>
          <div style={{backgroundColor:"#CFEBCF"}} className="mt-[-168px] h-[184px] w-[184px] relative rounded-[50%] bg-beige" />
        </div>
        <div className="w-[1026px] flex flex-row items-start justify-end py-0 px-[78px] box-border max-w-full shrink-0 mq1025:pl-[39px] mq1025:pr-[39px] mq1025:box-border">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[3.1px] shrink-0 [debug_commit:1de1738] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[17px] pb-0 pr-[5px] pl-0">
              <div className="flex flex-row items-start justify-start relative">
                <div style={{backgroundColor:"#CFEBCF"}} 
                className="h-[184px] w-[184px] absolute !m-[0] bottom-[-122px] left-[-151px] rounded-[50%] bg-beige" />
                <div className="rounded-lg bg-white overflow-x-auto flex flex-row items-start justify-start py-[13px] pr-2.5 pl-[11.5px] gap-[8px] z-[1] border-[1px] border-solid border-lightgray-100">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/location.svg"
                  />
                  <div className="relative text-base tracking-[0.13px] leading-[24px] font-aushadham-text-styles-body-large-regular text-gray-200 text-center inline-block min-w-[119px]">
                    Select Location
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-[17.9px] h-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/drp.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border min-w-[309px] max-w-full">
              <div className="self-stretch rounded-3xs bg-white box-border overflow-hidden flex flex-row items-start justify-between py-[13px] px-2.5 max-w-full gap-[20px] border-[1px] border-solid border-lightgray-200">
                <input
                  className="w-[321.8px] [border:none] [outline:none] bg-[transparent] h-[21.5px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border font-aushadham-text-styles-body-large-regular text-base text-gray-100 max-w-[calc(100%_-_48px)]"
                  placeholder="eg. Doctor, specialisation, clinic name"
                  type="text"
                />
                <img
                  className="h-6 w-[28.2px] relative min-h-[24px]"
                  alt=""
                  src="/frw.svg"
                />
              </div>
            </div>
            <div  style={{backgroundColor:"#CFEBCF"}}
            className="h-[184px] w-[184px] relative rounded-[50%] bg-beige" />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full">
        <div className="flex-1 bg-white box-border overflow-x-auto flex flex-row items-start justify-between pt-4 pb-3 pr-[241px] pl-[234px] max-w-full gap-[20px] border-[1px] border-solid border-whitesmoke-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[117px] mq725:pr-[120px] mq725:box-border">
          <div className="h-[72px] w-[1440px] relative bg-white box-border shrink-0 hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
          <div style={{backgroundColor:"#F3F3F3",borderRadius:"7px"}}  
           className="w-[148px]  bg-whitesmoke-100 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-[13px] box-border gap-[41px] z-[1]">
            <div className="flex-1 relative text-base leading-[140%] font-medium font-dinpro  text-center inline-block min-w-[69px]">
              Expertise
            </div>
            <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
              <img className="w-15 h-[15px] relative" 
              alt="" 
              src="/drp.svg" />
            </div>
          </div>
          <div className="w-[158px] shrink-0 flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
            <div style={{backgroundColor:"#F3F3F3",borderRadius:"7px"}}  
            className="self-stretch  bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-between py-[9px] px-[13px] gap-[20px] z-[1]">
              <div className="relative text-base leading-[140%] font-medium font-dinpro  text-center inline-block min-w-[53px]">
                Gender
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                <img
                  className="w-15 h-[15px] relative"
                  alt=""
                  src="/drp.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[151px] shrink-0 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
            <div style={{backgroundColor:"#F3F3F3",borderRadius:"7px"}}  
            className="self-stretch  bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-between py-[9px] px-[15px] gap-[20px] z-[1]">
              <div className="relative text-base leading-[140%] font-medium font-dinpro  text-center inline-block min-w-[35px]">
                Fees
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                <img
                  className="w-15 h-[15px] relative"
                  alt=""
                  src="/drp.svg"
                />
              </div>
            </div>
          </div>
          <div  className="w-[150px] shrink-0 flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border">
            <div style={{backgroundColor:"#F3F3F3",borderRadius:"7px"}}  
            className="self-stretch  bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-between py-[9px] px-3 gap-[20px] z-[1]">
              <div className="relative text-base leading-[140%] font-medium font-dinpro  text-center inline-block min-w-[79px]">
                Languages
              </div>
              <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
                <img
                  className="w-15 h-[15px] relative"
                  alt=""
                  src="/drp.svg"
                />
              </div>
            </div>
          </div>
          <div style={{backgroundColor:"#EAF2EA",borderRadius:"7px",color:"#3A643B"}} 
          className="w-[142px] rounded-6xs bg-honeydew overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] pr-2.5 pl-[13px] box-border gap-[40px] z-[1]">
            <div className="flex-1 relative text-base leading-[140%] font-medium font-dinpro text-darkolivegreen-100 text-center inline-block min-w-[67px]">
              All filters
            </div>
            <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
              <img className="w-15 h-[15px] relative"
               alt=""
                src="/drp.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1395.8px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1152.2px] flex flex-row items-end justify-start gap-[40px] max-w-full mq725:gap-[20px] mq975:flex-wrap">
          <Screen />
          <div className="flex-1 flex flex-col items-end justify-start gap-[53px] min-w-[491px] max-w-full mq725:min-w-full mq975:gap-[26px]">
            <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq725:flex-wrap">
              <button style={{backgroundColor:"#EAF2EA",borderRadius:"31px"}} 
              className="cursor-pointer [border:none] py-[13px] px-[22.4px] bg-primary-tint-2 rounded-12xl overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                <div className="relative text-base tracking-[0.5px] font-aushadham-text-styles-body-large-regular text-black text-center inline-block min-w-[73px]">Hair care </div>
                <div className="flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0">
                  <img
                    className="w-[11.2px] h-[11.3px] relative"
                    alt=""
                    src="/cros.svg"
                  />
                </div>
              </button>
              <button style={{backgroundColor:"#EAF2EA",borderRadius:"31px"}} 
              className="cursor-pointer [border:none] py-[13px] px-[23.9px] bg-primary-tint-2 rounded-12xl overflow-hidden flex flex-row items-start justify-start gap-[9px]">
                <div className="relative text-base tracking-[0.5px] font-aushadham-text-styles-body-large-regular text-black text-center inline-block min-w-[58px]">
                  Female
                </div>
                <div className="flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0">
                  <img
                    className="w-[11.2px] h-[11.3px] relative"
                    alt=""
                    src="/cros.svg"
                  />
                </div>
              </button>
              <button style={{backgroundColor:"#EAF2EA",borderRadius:"31px"}} 
               className="cursor-pointer [border:none] py-[13px] px-[17px] bg-primary-tint-2 rounded-12xl overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                <div className="relative text-base tracking-[0.5px] font-aushadham-text-styles-body-large-regular text-black text-center inline-block min-w-[98px]">
                  Rs.0-Rs.500
                </div>
                <div className="flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0">
                  <img
                    className="w-[11.2px] h-[11.3px] relative"
                    alt=""
                    src="/cros.svg"
                  />
                </div>
              </button>
              <button style={{backgroundColor:"#EAF2EA",borderRadius:"31px"}}  
              className="cursor-pointer [border:none] py-[13px] px-[20.9px] bg-primary-tint-2 rounded-12xl overflow-hidden flex flex-row items-start justify-start gap-[9px]">
                <div className="relative text-base tracking-[0.5px] font-aushadham-text-styles-body-large-regular text-black text-center inline-block min-w-[42px]">
                  Hindi
                </div>
                <div className="flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0">
                  <img
                    className="w-[11.2px] h-[11.3px] relative"
                    alt=""
                    src="/cros.svg"
                  />
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[4.2px] pl-0 box-border max-w-full">
              <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[40px] max-w-full mq975:gap-[20px]">
                <Screen propMinWidth="unset" />
                <div style={{borderRadius:"30px"}} className="w-[356px] rounded-11xl bg-oldlace shadow-[0px_4px_12.5px_rgba(0,_0,_0,_0.07)] box-border overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[153px] px-[30px] pb-6 gap-[21px] border-[1px] border-solid border-gainsboro-200 mq725:pt-[99px] mq725:pb-5 mq725:box-border">
                  <div className="w-[274px] flex flex-row items-start justify-center">
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
                  <div  className="w-[289px] flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                      <h1 className="m-0 left-10 relative text-13xl tracking-[-0.01em] leading-[28px] font-bold font-nunito text-darkslategray-300 text-left mq450:text-lgi mq450:leading-[17px] mq975:text-7xl mq975:leading-[22px]">
                        Dr. Prerna Narang
                      </h1>
                      <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[21px] gap-[7px]">
                          <div className="flex flex-row items-center justify-start gap-[15px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0"
                              alt=""
                              src="/link.svg"
                            />
                            <div className="relative text-base tracking-[-0.01em] leading-[20px] font-nunito text-dimgray-100 text-left">
                              Male-Female Infertility
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[7px]">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/stud.svg"
                            />
                            <div className="relative text-base tracking-[-0.01em] leading-[20px] font-semibold font-nunito text-dimgray-100 text-left">
                              7 years of Experience
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                            <img
                              className="h-4 w-[18px] relative object-contain"
                              alt=""
                              src="/com.svg"
                            />
                            <div className="relative text-base tracking-[-0.01em] leading-[20px] font-nunito text-dimgray-200 text-left">
                              Speaks: English, Hindi, Marathi
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-center py-0 px-2 gap-[8px] mq450:flex-wrap">
                          <div className="flex-1 rounded-3xs bg-oldlace box-border flex flex-col items-center justify-start pt-1.5 px-[7px] pb-[3px] gap-[4px] min-w-[102px] border-[1px] border-solid border-darkolivegreen-200">
                            <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-semibold font-nunito text-darkslategray-200 text-left inline-block min-w-[120px]">
                              Video Consultation
                            </div>
                            <b className="relative text-sm tracking-[-0.01em] leading-[20px] inline-block font-nunito text-darkolivegreen-100 text-left min-w-[34px] whitespace-nowrap">
                              ₹800
                            </b>
                          </div>
                          <div className="flex-1 rounded-3xs bg-oldlace box-border flex flex-col items-center justify-start pt-1.5 px-[7px] pb-[3px] gap-[4px] min-w-[97px] border-[1px] border-solid border-darkolivegreen-200">
                            <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-semibold font-nunito text-darkslategray-200 text-left inline-block min-w-[113px]">
                              Chat Consultation
                            </div>
                            <b className="relative text-sm tracking-[-0.01em] leading-[20px] inline-block font-nunito text-darkolivegreen-100 text-left min-w-[28px]">
                              Free
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-1.5">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[1.5px]">
                        <button className="cursor-pointer py-[9px] px-5 bg-white flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-center whitespace-nowrap border-[1px] border-solid border-darkolivegreen-100 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-seagreen">
                          <div className="relative text-base tracking-[-0.01em] leading-[20px] font-semibold font-nunito text-darkolivegreen-100 text-left inline-block min-w-[88px]">
                            View Profile
                          </div>
                        </button>
                      </div>
                      <button className="cursor-pointer [border:none] py-[16.5px] px-[72.5px] bg-darkolivegreen-100 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-seagreen">
                        <div className="relative text-base tracking-[-0.01em] leading-[20px] font-semibold font-nunito text-white text-left">
                          Book a consultation
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Docktor;
