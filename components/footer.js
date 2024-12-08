import Image from "next/image";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[46px] box-border max-w-full text-left text-7xl text-black font-lexend-deca mq1225:pr-[23px] mq1225:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-16 max-w-full mq450:gap-4 mq850:gap-8 mq1525:flex-wrap">
        <div className="h-[122px] flex flex-col items-start justify-start py-0 pl-0 pr-[13px] box-border">
          <Image
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            width={299}
            height={122}
            alt=""
            src="/sr-hc-logo01-1@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="relative font-light mq450:text-2xl">Home</div>
            <div className="relative font-light inline-block min-w-[111px] mq450:text-2xl">
              About us
            </div>
            <div className="relative font-light mq450:text-2xl">Services</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-8 pb-0 pl-0 pr-[15px]">
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="relative font-light inline-block min-w-[108px] mq450:text-2xl">
              Why Us?
            </div>
            <div className="relative font-light mq450:text-2xl">Feedbacks</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pl-0 pr-4 box-border max-w-full text-5xl text-darkslategray">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-8">
                <Image
                  className="w-6 h-6 relative"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/vuesaxlinearsms.svg"
                />
                <Image
                  className="w-6 h-6 relative"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/vuesaxlinearcallcalling.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div className="relative font-light mq450:text-lgi">
                admin@srhealthcare.com
              </div>
              <div className="relative font-light mq450:text-lgi">
                0091 974740 5877
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full text-5xl text-darkslategray">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <button className="cursor-pointer [border:none] py-[21px] px-28 bg-[transparent] rounded-lg [background:linear-gradient(96.69deg,_#41ebbe,_#19b78d)] flex flex-row items-start justify-center mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative text-9xl font-lexend-deca text-black text-left">
                Contact Us
              </div>
            </button>
            <div className="relative font-light mq450:text-lgi">
              <p className="m-0">123 Greenfield Avenue, Suite 456,</p>
              <p className="m-0">Bangalore, Karnataka, 560001,</p>
              <p className="m-0">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
