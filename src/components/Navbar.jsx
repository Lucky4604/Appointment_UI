import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="self-stretch bg-oldlace flex flex-row items-start justify-center pt-[23px] px-5 pb-[15px] box-border top-[0] z-[99] sticky max-w-full">
      <div className="h-[94px] w-[1440px] relative bg-oldlace hidden max-w-full" />
      <div className="w-[1232px] flex flex-row items-center justify-between gap-[20px] max-w-full z-[1] mq450:w-[935px]">
        <div className="w-[669px] flex flex-row items-center justify-start gap-[80px] max-w-full mq450:gap-[20px] mq750:gap-[40px] mq1050:w-[339px]">
          <img
            className="h-[49px] w-[259px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-45@2x.png"
          />
          <nav className="m-0 flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xl text-darkslategray-100 font-dinpro mq1050:hidden">
            <Link to="/">
            <div className="relative leading-[140%] capitalize font-medium inline-block min-w-[53px]">
              Home
            </div>
            </Link>
            <Link to="/doctors">
            <div
             className="relative leading-[140%] capitalize font-dinpro-bold text-darkolivegreen-100 inline-block min-w-[116px] whitespace-nowrap">
              find doctors
            </div>
            </Link>
            <div className="relative leading-[140%] capitalize font-medium inline-block min-w-[81px] whitespace-nowrap">{`About us `}</div>
          </nav>
        </div>
        <div className="h-14 flex flex-row items-start justify-start gap-[16px] mq450:hidden">
          <button className="cursor-pointer pt-[10.5px] px-[29px] pb-[15.5px] bg-oldlace h-[58px] rounded-2xs box-border overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-darkolivegreen-100 hover:bg-antiquewhite hover:box-border hover:border-[1px] hover:border-solid hover:border-seagreen">
            <div className="relative text-5xl font-medium font-dinpro text-darkolivegreen-100 text-left inline-block min-w-[60px] whitespace-nowrap">
              Login
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-[10.5px] px-[39px] pb-[14.5px] bg-darkolivegreen-100 rounded-2xs overflow-hidden flex flex-row items-center justify-center hover:bg-seagreen">
            <div className="relative text-5xl font-medium font-dinpro text-white text-left inline-block min-w-[85px] whitespace-nowrap">
              Sign-up
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
