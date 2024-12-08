import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section id="about"
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[88px] pl-5 pr-[716px] box-border max-w-full text-left text-29xl text-black font-lexend-deca mq450:pr-5 mq450:box-border mq850:pr-[179px] mq850:pb-[57px] mq850:box-border mq1225:pr-[358px] mq1225:box-border ${className}`}
    >
      <div className="w-[818px] flex flex-col items-start justify-start gap-[26px] max-w-full">
        <h1 className="m-0 w-[778px] relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq850:text-19xl">
          Who are We?
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full text-13xl text-darkslategray mq450:gap-4">
          <div className="relative font-light mq450:text-lgi mq850:text-7xl">
            SR First Aid Healthcare Pvt Ltd. is a multidisciplinary team of
            healthcare strategists, facility planners, and operational experts.
            Combining medical, financial, architectural, and technological
            expertise under one roof, we deliver tailored solutions for your
            healthcare facility's unique challenges.
          </div>
          <div className="flex flex-row items-start justify-start gap-1 max-w-full mq1225:flex-wrap">
            <div className="flex-[0.9316] flex flex-col items-start justify-start py-0 pl-0 pr-6 box-border gap-[41px] min-w-[228px] max-w-full mq450:gap-5 mq450:flex-1">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
                <div className="flex flex-row items-start justify-start gap-2.5 mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <div className="w-[30px] h-[30px] relative rounded-21xl bg-darkslateblue-200">
                        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-darkslateblue-200 w-full h-full hidden" />
                        <Image
                          className="absolute top-[11.2px] left-[9.4px] w-[11.9px] h-[7.6px] z-[1]"
                          loading="lazy"
                          width={12}
                          height={8}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-light mq450:text-lgi mq850:text-7xl">
                      Medical Expertise
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2.5 mq850:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <div className="w-[30px] h-[30px] relative rounded-21xl bg-darkslateblue-200">
                        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-darkslateblue-200 w-full h-full hidden" />
                        <Image
                          className="absolute top-[11.2px] left-[9.4px] w-[11.9px] h-[7.6px] z-[1]"
                          loading="lazy"
                          width={12}
                          height={8}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-light mq450:text-lgi mq850:text-7xl">
                      Financial Expertise
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2.5 mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <div className="w-[30px] h-[30px] relative rounded-21xl bg-darkslateblue-200">
                        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-darkslateblue-200 w-full h-full hidden" />
                        <Image
                          className="absolute top-[11.2px] left-[9.4px] w-[11.9px] h-[7.6px] z-[1]"
                          loading="lazy"
                          width={12}
                          height={8}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-light mq450:text-lgi mq850:text-7xl">
                      Architectural Expertise
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2.5 mq850:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <div className="w-[30px] h-[30px] relative rounded-21xl bg-darkslateblue-200">
                        <div className="absolute top-[0px] left-[0px] rounded-21xl bg-darkslateblue-200 w-full h-full hidden" />
                        <Image
                          className="absolute top-[11.2px] left-[9.4px] w-[11.9px] h-[7.6px] z-[1]"
                          loading="lazy"
                          width={12}
                          height={8}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                    <div className="relative font-light mq450:text-lgi mq850:text-7xl">
                      Technological Expertise
                    </div>
                  </div>
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
                <a href="tel:+919447008356" className="relative text-9xl font-lexend-deca text-white text-left mq450:text-3xl [text-decoration:none]">
                  Get in touch
                </a>
              </button>
            </div>
      
          
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
