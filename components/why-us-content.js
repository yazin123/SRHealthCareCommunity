import Image from "next/image";
import ExperienceCardContent from "./experience-card-content";
import PropTypes from "prop-types";

const WhyUsContent = ({ className = "" }) => {
  return (
    <div
      className={`mx-auto max-w-7xl flex flex-col items-start justify-start pt-0 pb-[25px] pl-0 pr-5 box-border gap-11  text-left text-29xl text-black font-lexend-deca mq850:gap-[22px] ${className}`}
    >
      <h1 className="m-0 w-[778px] relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq850:text-19xl">
        Why Us?
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-21xl">
        <div className="self-stretch flex flex-row items-start justify-start gap-4 max-w-full mq1525:flex-wrap">
          <ExperienceCardContent
            theRightExperience="The Right Experience"
            yearsOfProvenSuccessInHealthca="Years of proven success in healthcare operations."
          />
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[487px] max-w-full mq850:min-w-full mq1525:flex-1">
            <div className="h-[2143.3px] w-[1269.9px] absolute !m-[0] top-[-1978px] left-[-413.9px]">
           
              <div className="absolute top-[-324.9px] left-[56.9px] w-[1528.8px] h-[1441.9px] z-[1]">
                
                <div className="absolute top-[0px] left-[284.8px] w-[1244px] h-[1314px]">
                  <div className="absolute top-[507.1px] left-[381.73px] rounded-3xs bg-lightcyan w-[403.1px] h-[403.1px] [transform:_rotate(15deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[0px] left-[283.1px] rounded-mid bg-silver w-[994.8px] h-[1093.8px] [transform:_rotate(15deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[563.38px] left-[194.2px] rounded-mid bg-darkslateblue-500 w-[538.9px] h-[538.9px] [transform:_rotate(-15deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <Image
                  className="absolute top-[740.9px] mq850:hidden left-[0px] w-[1409px] h-[701px] object-contain z-[2]"
                  width={1469}
                  height={981}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <Image
                className="absolute top-[896px] mq850:hidden left-[434.9px] rounded-12xl w-[850px] h-[887px] z-[3]"
                loading="lazy"
                width={850}
                height={887}
                alt=""
                src="/rectangle-6.svg"
              />
              <Image
                className="absolute top-[866px] mq850:hidden  left-[275.9px] w-[1498.5px] h-[1277.3px] object-contain z-[4]"
                width={1499}
                height={1277}
                alt=""
                src="/remove-background-project-1-1@2x.png"
              />
            </div>
            <ExperienceCardContent
              experienceCardContentFlex="1"
              experienceCardContentMinWidth="unset"
              theRightExperience="The Right Expertise"
              yearsOfProvenSuccessInHealthca="A multidisciplinary team of experts across domains."
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full text-white">
          <ExperienceCardContent
            experienceCardContentFlex="1"
            experienceCardContentMinWidth="unset"
            theRightExperience="The Right Economics"
            yearsOfProvenSuccessInHealthca="Solutions that maximize efficiency and minimize costs."
          />
          <div className="flex-1 rounded-mini bg-darkslateblue-200 flex flex-col items-start justify-start pt-10 pb-[41px] pl-[41px] pr-5 box-border gap-7 min-w-[562px] max-w-full mq850:min-w-full">
            <div className="w-[749px] h-[236px] relative rounded-mini bg-darkslateblue-200 hidden max-w-full" />
            <h2 className="m-0 relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[1] mq450:text-5xl mq850:text-13xl">
              Discover Services offered by Us
            </h2>
            <button className="cursor-pointer [border:none] py-[21px] pl-9 pr-[35px] bg-white rounded-lg flex flex-row items-start justify-start z-[1] hover:text-[#19B78D]">
              <a href="#services" className="relative text-9xl font-lexend-deca text-darkslateblue-200 text-left [text-decoration:none]  hover:text-[#19B78D]">
                View Services
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

WhyUsContent.propTypes = {
  className: PropTypes.string,
};

export default WhyUsContent;
