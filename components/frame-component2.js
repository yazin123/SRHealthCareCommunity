import Image from "next/image";
import AdministrationCardContent from "./administration-card-content";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1534px] flex flex-col items-start justify-start pt-0 pb-5 pl-0 pr-5 box-border gap-[25px] max-w-full text-left text-29xl text-black font-lexend-deca ${className}`}
    >
      <div className="w-[900px] flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-3.5 max-w-full">
        <h1 className="m-0 w-[778px] relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq850:text-19xl">
          Our Expertise
        </h1>
        <div className="self-stretch relative text-5xl font-light text-darkslategray mq450:text-lgi">
          End-to-End Solutions for Efficient, Patient-Centric Healthcare
          Facilities
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-13xl">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
          <AdministrationCardContent hospitalAdministrationManagement="Hospital Administration Management" />
          <AdministrationCardContent
            frameDivFlex="unset"
            frameDivMinWidth="unset"
            hospitalAdministrationManagement="Patient Management"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
          <AdministrationCardContent
            frameDivFlex="unset"
            frameDivMinWidth="unset"
            hospitalAdministrationManagement={`Strategic Planning & Marketing`}
          />
          <AdministrationCardContent
            frameDivFlex="unset"
            frameDivMinWidth="unset"
            hospitalAdministrationManagement="Quality Assurance"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
          <AdministrationCardContent
            frameDivFlex="unset"
            frameDivMinWidth="unset"
            hospitalAdministrationManagement="Information Technology Integration"
          />
          <AdministrationCardContent
            frameDivFlex="unset"
            frameDivMinWidth="unset"
            hospitalAdministrationManagement="Facility and Equipment Management"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
          <AdministrationCardContent
            frameDivFlex="unset"
            frameDivMinWidth="unset"
            hospitalAdministrationManagement="Human Resources Management"
          />
          <AdministrationCardContent
            frameDivFlex="unset"
            frameDivMinWidth="unset"
            hospitalAdministrationManagement="Financial Management"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[15px] max-w-full mq850:flex-wrap">
        <button className="cursor-pointer [border:none] py-[21px] px-[33px] bg-darkslateblue-200 rounded-lg flex flex-row items-start justify-start box-border gap-2.5 max-w-full">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <Image
              className="w-[29px] h-[29px] relative"
              width={29}
              height={29}
              alt=""
              src="/vuesaxlinearcall-2.svg"
            />
          </div>
          <div className="relative text-9xl font-lexend-deca text-white text-left mq450:text-3xl">
            Get in touch with the Team
          </div>
        </button>
        <button className="cursor-pointer border-darkslateblue-400 border-[2px] border-solid py-[18px] px-11 bg-[transparent] rounded-lg box-border flex flex-row items-start justify-start max-w-full hover:bg-darkslateblue-700 hover:border-darkslateblue-100 hover:border-[2px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative text-9xl font-lexend-deca text-darkslateblue-200 text-left mq450:text-3xl">
            View Testimonials
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
