import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[85px] box-border gap-[189px] leading-[normal] tracking-[normal] mq450:gap-[47px] mq750:gap-[94px]">
      <Navbar />
      <main className="w-[1417px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1243px] flex flex-col items-start justify-start gap-[41px] max-w-full text-left text-5xl text-darkslategray-300 font-body-1-regular mq750:gap-[20px]">
          <Profile />
          <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[29px] max-w-full mq1050:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[409px] max-w-full mq750:gap-[16px] mq750:min-w-full">
                <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-start justify-start pt-0 pb-[31px] pr-0 pl-px gap-[27px] max-w-full border-[1px] border-solid border-gainsboro-800">
                  <div className="self-stretch h-[410px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gainsboro-800" />
                  <div className="self-stretch rounded-tl-mini rounded-tr-lg rounded-b-none [background:linear-gradient(-89.96deg,_#fbfcfb,_#f4f7ec)] overflow-hidden flex flex-row items-start justify-between py-[13px] px-[35px] gap-[20px] z-[1] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                        A Little About me
                      </h3>
                    </div>
                    <button className="cursor-pointer py-1 pr-[19px] pl-[21px] bg-white rounded-3xs flex flex-row items-start justify-start gap-[6.7px] border-[1px] border-solid border-darkolivegreen-100">
                      <div className="relative text-base leading-[24px] font-medium font-poppins text-dimgray-300 text-center inline-block min-w-[51px]">
                        Follow
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                        <img
                          className="w-3.5 h-3.5 relative"
                          alt=""
                          src="/group-39517.svg"
                        />
                      </div>
                    </button>
                  </div>
                  <div className="w-[602px] flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full text-base text-darkslategray-500 font-poppins">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                        <div className="w-[520px] h-[101px] relative leading-[27px] font-medium flex items-center shrink-0 max-w-full z-[1]">{`Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the `}</div>
                        <div className="self-stretch flex flex-row items-end justify-start gap-[10px] max-w-full text-gray-600 mq750:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border min-w-[284px] max-w-full">
                            <img
                              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                              alt=""
                              src="/vector-38.svg"
                            />
                          </div>
                          <div className="relative [text-decoration:underline] leading-[27px] font-medium inline-block min-w-[87px] z-[1]">
                            Read More
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[39px] max-w-full text-xl text-black font-body-1-regular mq750:gap-[19px]">
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                          <div className="flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
                            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                              <div className="relative tracking-[-0.01em] leading-[20px] font-medium z-[1] mq450:text-base mq450:leading-[16px]">{`Language Spoken `}</div>
                            </div>
                            <button className="cursor-pointer [border:none] py-2.5 px-[19.5px] bg-slateblue-200 rounded-2xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-slateblue-100">
                              <div className="relative text-xl tracking-[-0.01em] leading-[20px] font-medium font-body-1-regular text-dimgray-400 text-left inline-block min-w-[66px]">{`English `}</div>
                            </button>
                            <button className="cursor-pointer [border:none] py-2.5 px-[17.5px] bg-slateblue-200 rounded-2xl overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-slateblue-100">
                              <div className="relative text-xl tracking-[-0.01em] leading-[20px] font-medium font-body-1-regular text-dimgray-400 text-left inline-block min-w-[48px] mq450:text-base mq450:leading-[16px]">
                                Hindi
                              </div>
                            </button>
                            <button className="cursor-pointer [border:none] py-2.5 px-[19px] bg-slateblue-200 rounded-2xl overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-slateblue-100">
                              <div className="relative text-xl tracking-[-0.01em] leading-[20px] font-medium font-body-1-regular text-dimgray-400 text-left inline-block min-w-[61px] mq450:text-base mq450:leading-[16px]">
                                Telugu
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[15px]">
                          <div className="flex flex-row items-start justify-start relative gap-[10px] w-10 h-10 z-[1]">
                            <div className="h-[40.6px] w-[40.6px] relative rounded-[50%] bg-ghostwhite-100 box-border border-[0px] border-solid border-gray-300" />
                            <img
                              className="h-3/6 w-[27.5%] absolute !m-[0] top-[25%] right-[35%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full z-[1]"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start relative gap-[10px] z-[1]">
                            <div className="h-[40.6px] w-[40.6px] relative rounded-[50%] bg-ghostwhite-100 box-border border-[0px] border-solid border-gray-300" />
                            <img
                              className="h-3/6 w-6/12 absolute !m-[0] top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                              loading="lazy"
                              alt=""
                              src="/group-39479.svg"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start relative gap-[10px] z-[1]">
                            <div className="h-[40.6px] w-[40.6px] relative rounded-[50%] bg-ghostwhite-100 box-border border-[0px] border-solid border-gray-300" />
                            <img
                              className="h-[38.75%] w-[55%] absolute !m-[0] top-[30%] right-[22.5%] bottom-[31.25%] left-[22.5%] max-w-full overflow-hidden max-h-full z-[1]"
                              loading="lazy"
                              alt=""
                              src="/group-39481.svg"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start relative gap-[10px] w-10 h-10 z-[1]">
                            <div className="h-[40.6px] w-[40.6px] relative rounded-[50%] bg-ghostwhite-100 box-border border-[0px] border-solid border-gray-300" />
                            <img
                              className="h-[44.75%] w-[55%] absolute !m-[0] top-[30%] right-[20%] bottom-[25.25%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                              loading="lazy"
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
                    <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-start justify-start pt-0 pb-[33px] pr-px pl-0.5 gap-[31px] max-w-full border-[1px] border-solid border-gainsboro-800 mq750:gap-[15px]">
                      <div className="self-stretch h-[251px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gainsboro-800" />
                      <div className="self-stretch rounded-tl-mini rounded-tr-lg rounded-b-none [background:linear-gradient(90deg,_#f4f7ec,_rgba(248,_248,_247,_0.46))] overflow-hidden flex flex-row items-start justify-start py-3.5 px-[37px] z-[1]">
                        <div className="relative font-semibold mq450:text-lgi">
                          I Specialize In
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-base text-black">
                        <div className="flex flex-row items-start justify-center gap-[14px] max-w-full z-[1] mq750:flex-wrap">
                          <div className="h-[123px] flex flex-col items-center justify-start gap-[7px]">
                            <div className="w-[100px] flex-1 rounded-4xs bg-floralwhite-100 box-border overflow-hidden flex flex-col items-start justify-start py-[9px] px-[7px] border-[1px] border-solid border-whitesmoke-200">
                              <img
                                className="w-[84px] flex-1 relative max-h-full overflow-hidden object-contain"
                                loading="lazy"
                                alt=""
                                src="/women-1@2x.png"
                              />
                            </div>
                            <div className="relative leading-[20px] capitalize font-medium inline-block min-w-[121px]">
                              women’s health
                            </div>
                          </div>
                          <div className="h-[122px] w-[100px] flex flex-col items-center justify-start gap-[6px]">
                            <div className="self-stretch flex-1 rounded-4xs bg-floralwhite-100 overflow-hidden flex flex-col items-start justify-start py-[9px] px-[7px] border-[1px] border-solid border-whitesmoke-200">
                              <img
                                className="w-[84px] flex-1 relative max-h-full overflow-hidden"
                                loading="lazy"
                                alt=""
                                src="/skincare-1.svg"
                              />
                            </div>
                            <div className="relative leading-[20px] capitalize font-medium inline-block min-w-[69px]">
                              Skin Care
                            </div>
                          </div>
                          <div className="h-[122px] w-[92px] flex flex-col items-center justify-start gap-[6px]">
                            <div className="self-stretch flex-1 rounded-4xs bg-floralwhite-100 overflow-hidden flex flex-col items-start justify-start py-[9px] px-[3px] border-[1px] border-solid border-whitesmoke-200">
                              <img
                                className="w-[84px] flex-1 relative max-h-full overflow-hidden"
                                loading="lazy"
                                alt=""
                                src="/immunity-1.svg"
                              />
                            </div>
                            <div className="relative leading-[20px] capitalize font-medium inline-block min-w-[68px]">
                              Immunity
                            </div>
                          </div>
                          <div className="h-[122px] w-[100px] flex flex-col items-center justify-start gap-[8px]">
                            <div className="self-stretch flex-1 rounded-4xs bg-floralwhite-100 overflow-hidden flex flex-col items-start justify-start py-2 px-[7px] border-[1px] border-solid border-whitesmoke-200">
                              <img
                                className="w-[84px] flex-1 relative max-h-full overflow-hidden object-contain"
                                loading="lazy"
                                alt=""
                                src="/hair-1@2x.png"
                              />
                            </div>
                            <div className="relative leading-[20px] capitalize font-medium inline-block min-w-[68px]">
                              Hair care
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-start justify-start pt-0 px-px pb-[29px] gap-[24px] max-w-full border-[1px] border-solid border-gainsboro-800">
                      <div className="self-stretch h-[222px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gainsboro-800" />
                      <div className="self-stretch rounded-tl-mini rounded-tr-lg rounded-b-none [background:linear-gradient(90deg,_#f4f7ec,_#f4f7ec_0.01%,_#fdfdfd)] overflow-hidden flex flex-row items-start justify-start py-[14.5px] px-7 z-[1]">
                        <div className="relative font-semibold mq450:text-lgi">
                          The Concerns I Treat
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-6 box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[2px] max-w-full mq750:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[187px]">
                            <div className="flex flex-row items-end justify-start gap-[11px] mq450:flex-wrap">
                              <button className="cursor-pointer [border:none] py-[12.5px] px-4 bg-ghostwhite-100 rounded-[19px] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-700">
                                <div className="relative text-base leading-[18px] font-medium font-poppins text-darkolivegreen-100 text-left inline-block min-w-[122px]">
                                  Skin Treatment
                                </div>
                              </button>
                              <button className="cursor-pointer [border:none] py-3 px-[13px] bg-ghostwhite-100 rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-700">
                                <div className="relative text-base leading-[18px] font-medium font-poppins text-darkolivegreen-100 text-left inline-block min-w-[87px]">
                                  Pregnancy
                                </div>
                              </button>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                              <div className="flex-1 flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
                                <button className="cursor-pointer [border:none] py-3 px-[24.5px] bg-ghostwhite-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-700">
                                  <div className="relative text-base leading-[18px] font-medium font-poppins text-darkolivegreen-100 text-left inline-block min-w-[86px]">
                                    Pelvic Pain
                                  </div>
                                </button>
                                <button className="cursor-pointer [border:none] py-3 px-[10.5px] bg-ghostwhite-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-700">
                                  <div className="relative text-base leading-[18px] font-medium font-poppins text-darkolivegreen-100 text-left inline-block min-w-[114px]">
                                    Ovarian Cysts
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0">
                            <div className="flex flex-col items-end justify-start gap-[18px]">
                              <button className="cursor-pointer [border:none] py-3 px-[11px] bg-ghostwhite-100 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-700">
                                <div className="relative text-base leading-[18px] font-medium font-poppins text-darkolivegreen-100 text-left inline-block min-w-[113px]">
                                  Period Doubts
                                </div>
                              </button>
                              <div className="flex flex-row items-start justify-end py-0 pr-[7px] pl-[9px]">
                                <button className="cursor-pointer py-2.5 px-[23px] bg-ghostwhite-200 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-gainsboro-600 hover:bg-gainsboro-1000 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
                                  <div className="relative text-base leading-[18px] font-medium font-poppins text-darkolivegreen-100 text-left inline-block min-w-[71px]">
                                    + 5 More
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <button className="cursor-pointer [border:none] py-3 px-2.5 bg-ghostwhite-100 rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-700">
                              <div className="relative text-base leading-[18px] font-medium font-poppins text-darkolivegreen-100 text-left inline-block min-w-[115px]">
                                Endometriosis
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[41px] gap-[34px] max-w-full border-[1px] border-solid border-gainsboro-800 mq750:gap-[17px]">
                      <div className="self-stretch h-[331px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gainsboro-800" />
                      <div className="self-stretch rounded-tl-mini rounded-tr-lg rounded-b-none [background:linear-gradient(90deg,_#f4f7ec,_#fcfcfc)] overflow-hidden flex flex-row items-start justify-start py-3.5 px-[27px] z-[1]">
                        <div className="relative font-semibold mq450:text-lgi">
                          My Work Experience
                        </div>
                      </div>
                      <div className="w-[525.5px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-lg text-darkolivegreen-100 font-poppins">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[26.5px] max-w-full">
                          <div className="w-[376px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
                            <div className="flex-1 relative leading-[19.2px] uppercase font-semibold inline-block max-w-full z-[1]">
                              I have been in practice for : 7+ Years
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-end justify-start gap-[20.9px] max-w-full text-base text-darkslategray-200">
                            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                              <img
                                className="w-[421.5px] relative max-h-full max-w-full z-[1]"
                                loading="lazy"
                                alt=""
                                src="/vector-46.svg"
                              />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full z-[1] mq450:flex-wrap">
                              <button className="cursor-pointer [border:none] p-3 bg-ghostwhite-100 rounded-md overflow-hidden flex flex-row items-start justify-start">
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/materialsymbolshomeworkoutlinerounded.svg"
                                />
                              </button>
                              <div className="flex-1 flex flex-row items-start justify-center gap-[49px] min-w-[268px] max-w-full mq450:flex-wrap mq450:gap-[24px]">
                                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[9px] min-w-[155px]">
                                  <div className="self-stretch relative leading-[21px] font-medium [transform:_rotate(-0.1deg)]">
                                    Midtown Medical Clinic
                                  </div>
                                  <div className="w-[130.3px] relative leading-[21px] font-medium text-darkslategray-500 flex items-center [transform:_rotate(-0.1deg)]">
                                    Senior doctor
                                  </div>
                                </div>
                                <div className="w-[126.6px] relative leading-[21px] text-darkslategray-600 flex items-center shrink-0 [transform:_rotate(-0.1deg)]">
                                  <span className="[line-break:anywhere] w-full">
                                    2016-
                                    <span className="uppercase">present</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full z-[1] mq450:flex-wrap">
                              <button className="cursor-pointer [border:none] p-3 bg-ghostwhite-100 rounded-md overflow-hidden flex flex-row items-start justify-start">
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/materialsymbolshomeworkoutlinerounded.svg"
                                />
                              </button>
                              <div className="flex-1 flex flex-row items-start justify-center gap-[49px] min-w-[268px] max-w-full mq450:flex-wrap mq450:gap-[24px]">
                                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[9px] min-w-[155px]">
                                  <div className="self-stretch relative leading-[21px] font-medium [transform:_rotate(-0.1deg)]">
                                    Midtown Medical Clinic
                                  </div>
                                  <div className="w-[130.3px] relative leading-[21px] font-medium text-darkslategray-500 flex items-center [transform:_rotate(-0.1deg)]">
                                    Senior doctor
                                  </div>
                                </div>
                                <div className="w-[126.6px] relative leading-[21px] text-darkslategray-600 flex items-center shrink-0 [transform:_rotate(-0.1deg)]">
                                  2010-2015
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[584px] rounded-[29px] bg-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 px-[17px] pb-11 gap-[31.3px] min-w-[584px] max-w-full text-center text-xl text-black border-[1px] border-solid border-gainsboro-100 lg:pt-[21px] lg:pb-[29px] lg:box-border mq750:gap-[16px] mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full mq1050:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[13.7px] pr-[3px] pl-0.5 box-border max-w-full">
                  <div className="flex-1 rounded-mini bg-white box-border flex flex-row items-start justify-between py-3.5 pr-[29px] pl-[27px] max-w-full gap-[20px] z-[1] border-[1px] border-solid border-gainsboro-400 mq450:flex-wrap">
                    <div className="relative tracking-[0.2px] font-semibold mq450:text-base">
                      Appointment Fee
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 text-darkolivegreen-100 font-inter">
                      <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[83px] whitespace-nowrap mq450:text-base">
                        ₹699.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 pb-[10.7px] pr-2 pl-3.5 box-border max-w-full">
                  <div className="flex flex-row items-end justify-start gap-[20px] max-w-full mq750:flex-wrap">
                    <b className="relative tracking-[0.5px] mq450:text-base">
                      Select your mode of session
                    </b>
                    <div className="w-[232px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border">
                      <img
                        className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                        alt=""
                        src="/vector-41.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[6.7px] gap-[22px] text-base text-gray-800 font-gotham-rounded mq750:flex-wrap">
                  <div className="rounded-3xs bg-white flex flex-col items-end justify-start pt-[19px] px-[42px] pb-2.5 gap-[4px] border-[1px] border-solid border-gainsboro-300">
                    <div className="w-[71px] relative tracking-[0.5px] font-medium inline-block min-w-[71px]">
                      In-Clinic
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 pr-1 pl-1.5 text-dimgray-200 font-body-1-regular">
                      <div className="relative tracking-[0.5px] inline-block min-w-[62px]">
                        45 Mins
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs bg-mintcream-100 box-border flex flex-col items-start justify-start pt-4 pb-2.5 pr-9 pl-[51px] gap-[4px] min-w-[112px] text-lg text-darkolivegreen-100 border-[1px] border-solid border-darkolivegreen-200">
                    <div className="w-[83px] flex flex-row items-start justify-start gap-[8px]">
                      <div className="flex-1 relative tracking-[0.5px] font-medium inline-block min-w-[55px]">
                        Video
                      </div>
                      <div className="h-[21px] flex flex-row items-start justify-start relative gap-[10px]">
                        <div className="h-5 w-5 relative rounded-[50%] bg-darkolivegreen-100" />
                        <img
                          className="h-[15px] w-[15px] absolute !m-[0] top-[3px] left-[2px] overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/frame-1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-[3px] text-base text-dimgray-200 font-body-1-regular">
                      <div className="relative tracking-[0.5px] inline-block min-w-[62px]">
                        45 Mins
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.8052] rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-[18px] px-[51px] pb-[11px] gap-[4px] min-w-[108px] text-gray-900 border-[1px] border-solid border-gainsboro-300 mq450:flex-1">
                    <div className="w-[62px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                      <div className="flex-1 relative tracking-[0.5px] font-medium">
                        Chat
                      </div>
                    </div>
                    <div className="relative tracking-[0.5px] font-body-1-regular text-dimgray-200 inline-block min-w-[62px]">
                      10 Mins
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3.7px] pr-2 pl-2.5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-[11px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <b className="relative tracking-[0.2px] mq450:text-base">
                            {`Pick a `}
                            <span className="lowercase">Time slot</span>
                          </b>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-center gap-[9px] min-w-[224px] max-w-full mq450:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[189px]">
                            <img
                              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                              alt=""
                              src="/vector-43.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start relative gap-[10px]">
                            <div className="w-11 h-[43px] relative rounded-[50%] bg-white box-border border-[0px] border-solid border-gray-400" />
                            <img
                              className="w-6 h-6 absolute !m-[0] top-[9px] left-[11px] overflow-hidden shrink-0 z-[1]"
                              loading="lazy"
                              alt=""
                              src="/calendar.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-[21px] bg-white box-border overflow-hidden flex flex-row items-start justify-center pt-[22px] pb-[17px] pr-[31px] pl-8 gap-[18px] max-w-full text-base text-darkolivegreen-100 font-inter border-[1px] border-solid border-gainsboro-500 mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0">
                        <img
                          className="w-5 h-5 relative object-contain"
                          loading="lazy"
                          alt=""
                          src="/da@2x.png"
                        />
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[253px] max-w-full mq750:flex-wrap">
                        <div className="flex-1 rounded-2xs bg-mintcream-100 box-border flex flex-col items-start justify-start pt-[17px] px-[13px] pb-3.5 gap-[8px] min-w-[93px] border-[0.5px] border-solid border-darkolivegreen-100">
                          <div className="relative tracking-[0.2px] font-semibold inline-block min-w-[95px]">
                            Mon, 10 Oct
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-[18px] pl-[17.5px] text-gray-500 font-body-1-regular">
                            <b className="relative inline-block min-w-[60px]">
                              10 slots
                            </b>
                          </div>
                        </div>
                        <div className="flex-[0.8854] rounded-2xs bg-white box-border flex flex-col items-start justify-start py-3.5 px-[18px] gap-[8px] min-w-[93px] text-gray-900 border-[1px] border-solid border-gainsboro-400 mq450:flex-1">
                          <div className="relative tracking-[0.18px] inline-block min-w-[85px]">
                            Tue, 11 Oct
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[12.5px] text-tomato font-body-1-regular">
                            <b className="relative inline-block min-w-[60px]">{`02 slots `}</b>
                          </div>
                        </div>
                        <div className="flex-[0.9896] rounded-2xs bg-white box-border flex flex-col items-start justify-start py-3.5 px-[13px] gap-[8px] min-w-[93px] text-gray-1000 border-[1px] border-solid border-gainsboro-400 mq450:flex-1">
                          <div className="relative tracking-[0.2px] inline-block min-w-[94px]">
                            Wed, 12 Oct
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[17px] text-goldenrod font-body-1-regular">
                            <b className="relative inline-block min-w-[60px]">{`05 slots `}</b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0">
                        <img
                          className="w-5 h-5 relative"
                          loading="lazy"
                          alt=""
                          src="/da-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[21px] box-border max-w-full text-lg">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
                    <b className="w-[106px] relative tracking-[0.2px] flex items-center justify-center">
                      Morning
                    </b>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[50px] pl-0 box-border gap-[13px_12px] min-h-[147px] mq750:pr-[25px] mq750:box-border">
                      <button className="cursor-pointer py-[23px] px-4 bg-white w-[106px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-mini tracking-[0.2px] font-inter text-gray-900 text-center inline-block min-w-[71px] whitespace-nowrap">
                          09:00 AM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[23px] px-4 bg-white rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-mini tracking-[0.19px] font-inter text-gray-900 text-center inline-block min-w-[71px] whitespace-nowrap">
                          09:30 AM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[23px] px-[17px] bg-white w-[106px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-mini tracking-[0.2px] font-inter text-gray-900 text-center inline-block min-w-[69px] whitespace-nowrap">
                          10:00 AM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[23px] px-[18px] bg-white w-[105px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-mini tracking-[0.2px] font-inter text-gray-900 text-center inline-block min-w-[66px] whitespace-nowrap">
                          10:15 AM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[23px] px-[17px] bg-white w-[106px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-mini tracking-[0.2px] font-inter text-gray-900 text-center inline-block min-w-[69px] whitespace-nowrap">
                          10:45 AM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[23px] px-3.5 bg-darkolivegreen-100 w-[92px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-seagreen hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-sm tracking-[0.2px] font-inter text-white text-center inline-block min-w-[62px] whitespace-nowrap">
                          11:00 AM
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[9.2px] pr-4 pl-6 box-border max-w-full text-lg">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
                    <b className="w-[101px] relative tracking-[0.2px] flex items-center justify-center">
                      Evening
                    </b>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[57px] pl-0 box-border gap-[13px_12px] min-h-[147px] mq750:pr-7 mq750:box-border">
                      <button className="cursor-pointer py-[22px] px-[13px] bg-white w-[104px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-base tracking-[0.17px] font-inter text-gray-900 text-center inline-block min-w-[75px] whitespace-nowrap">
                          04:00 PM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[22px] px-3.5 bg-white w-[104px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-base tracking-[0.2px] font-inter text-gray-900 text-center inline-block min-w-[73px] whitespace-nowrap">
                          04:15 PM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[22px] px-3 bg-white w-[103px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-base tracking-[0.2px] font-inter text-gray-900 text-center inline-block min-w-[76px] whitespace-nowrap">
                          04:30 PM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[22px] px-[13px] bg-white w-[104px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-base tracking-[0.17px] font-inter text-gray-900 text-center inline-block min-w-[75px] whitespace-nowrap">
                          04:45 PM
                        </div>
                      </button>
                      <button className="cursor-pointer py-[22px] px-[15px] bg-white rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                        <div className="relative text-base tracking-[0.2px] font-inter text-gray-900 text-center inline-block min-w-[72px] whitespace-nowrap">
                          05:15 PM
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-[37.8px] box-border max-w-full">
                  <button className="cursor-pointer [border:none] pt-[17.9px] pb-[17.8px] pr-5 pl-7 bg-darkolivegreen-100 flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-seagreen">
                    <div className="relative text-xl capitalize font-medium font-inter text-white text-left">
                      Make an appointment
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[632px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
              <div className="flex-1 rounded-lg bg-white box-border flex flex-col items-start justify-start pt-0 pb-[35px] pr-0 pl-px gap-[22.5px] max-w-full border-[1px] border-solid border-gainsboro-800">
                <div className="self-stretch h-[524px] relative rounded-lg bg-white box-border hidden border-[1px] border-solid border-gainsboro-800" />
                <div className="self-stretch rounded-tl-mini rounded-tr-lg rounded-b-none [background:linear-gradient(90deg,_#f4f7ec,_#fbfbfb)] overflow-hidden flex flex-row items-start justify-start py-[17px] px-[31px] z-[1]">
                  <div className="relative font-semibold mq450:text-lgi">
                    Featured Reviews (102)
                  </div>
                </div>
                <Reviews
                  consultedForSkinCare="Consulted for Skin care"
                  mightBeBitEarlyToConfirmB="Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods"
                />
                <Reviews
                  consultedForSkinCare="Consulted for Pregnancy"
                  mightBeBitEarlyToConfirmB="Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods"
                  propWidth="189px"
                  propDisplay="inline-block"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
