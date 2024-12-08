import Image from "next/image";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-300 w-full flex flex-row items-start justify-center py-0  box-border  text-left  text-black font-lexend-deca  mq1225:box-border ${className}`}
    >
      <div className="flex mq850:block  px-4  items-start justify-evenly gap-16 w-full  ">
        <div className=" flex flex-col items-start justify-center py-0 pl-0 pr-[13px] box-border">
          <Image
            className="h-20 w-auto cursor-pointer"
            width={299}
            height={122}
            src="/sr-hc-logo01-1@2x.png"
            alt="Healthcare Community"
          />
        </div>

        <div className="flex flex-col items-start justify-start pt-[35px] pb-0 pl-0 pr-4 box-border max-w-full t text-darkslategray">
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
              <div className="relative font-light ">
                info@srhealthcarecommunity.com
              </div>
              <div className="relative font-light ">
                +91 9447008356. +91 9447108356
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full text-darkslategray">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <button className="cursor-pointer [border:none] py-4 px-28 w-full bg-[transparent] rounded-lg [background:linear-gradient(96.69deg,_#41ebbe,_#19b78d)] flex flex-row items-start justify-center mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative  font-lexend-deca text-white text-left">
                Contact Us
              </div>
            </button>
            <div className="relative font-light ">
              <p className="m-0">17/305, First Floor, Thrikkakara</p>
              <p className="m-0">Sea Port Airport Road, Chittethukara, 682030,</p>
              <p className="m-0">Kakkanad, Kochi, Kerala, India</p>
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
