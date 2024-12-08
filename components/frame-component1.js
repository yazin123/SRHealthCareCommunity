import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch mt-32 flex flex-row items-start justify-center pt-0 pb-[247px] pl-5 pr-[757px] box-border max-w-full text-left text-45xl text-black font-lexend-deca mq450:pr-5 mq450:box-border mq850:pr-[189px] mq850:pb-[161px] mq850:box-border mq1225:pr-[378px] mq1225:box-border ${className}`}
    >
      <div className="w-[777px] flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
          <h1 className="m-0 relative text-inherit font-[inherit] mq450:text-19xl mq850:text-32xl">
            <span className="font-light">{`Transforming `}</span>
            <span className="font-medium text-transparent !bg-clip-text [background:linear-gradient(96.69deg,_#41ebbe,_#19b78d_16.1%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Healthcare Facilities
            </span>
            <span className="font-light">{` with `}</span>
            <span className="font-medium text-transparent !bg-clip-text [background:linear-gradient(99.12deg,_#7181da,_#30409a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Expertise and Innovation
            </span>
          </h1>
          <div className="self-stretch relative text-5xl font-light text-darkslategray mq450:text-lgi">
            Comprehensive strategies and solutions for hospitals.
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[21px] pl-8 pr-[31px] bg-darkslateblue-200 rounded-lg flex flex-row items-start justify-start gap-[18px]">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <Image
              className="w-[29px] h-[29px] relative"
              width={29}
              height={29}
              alt=""
              src="/vuesaxlinearcall.svg"
            />
          </div>
          <div className="relative text-9xl font-lexend-deca text-white text-left mq450:text-3xl">
            Get in touch
          </div>
        </button>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
