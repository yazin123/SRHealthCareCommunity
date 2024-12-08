import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[90px] pl-5 pr-[46px] box-border max-w-full mq1225:pr-[23px] mq1225:box-border ${className}`}
    >
      <header className="w-[1540px] flex flex-row items-end justify-between gap-5 max-w-full">
        <Image
          className="h-[122px] w-[299px] relative object-cover"
          loading="lazy"
          width={299}
          height={122}
          alt=""
          src="/sr-hc-logo01-1@2x.png"
        />
        <div className="w-[672px] flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[74px] max-w-full mq450:gap-[18px] mq850:gap-[37px]">
            <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full mq1225:hidden">
              <nav className="m-0 self-stretch h-[33px] relative text-left text-7xl text-black font-lexend-deca">
                <a className="[text-decoration:none] absolute top-[0px] left-[0px] font-light text-[inherit] inline-block w-[75px] h-[33px] min-w-[75px]">
                  Home
                </a>
                <a className="[text-decoration:none] absolute top-[0px] left-[108px] font-light text-[inherit] inline-block w-[111px] h-[33px] min-w-[111px] whitespace-nowrap">
                  About us
                </a>
                <a className="[text-decoration:none] absolute top-[0px] left-[252px] font-light text-[inherit] inline-block w-[104px] h-[33px] min-w-[104px]">
                  Services
                </a>
              </nav>
            </nav>
            <button className="cursor-pointer [border:none] py-[21px] pl-[47px] pr-[46px] bg-[transparent] rounded-lg [background:linear-gradient(96.69deg,_#41ebbe,_#19b78d)] flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative text-9xl font-lexend-deca text-black text-left">
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
