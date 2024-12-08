import { useMemo } from "react";
import PropTypes from "prop-types";

const ExperienceCardContent = ({
  className = "",
  experienceCardContentFlex,
  experienceCardContentMinWidth,
  theRightExperience,
  yearsOfProvenSuccessInHealthca,
}) => {
  const experienceCardContentStyle = useMemo(() => {
    return {
      flex: experienceCardContentFlex,
      minWidth: experienceCardContentMinWidth,
    };
  }, [experienceCardContentFlex, experienceCardContentMinWidth]);

  return (
    <div
      className={`flex-[0.9186] rounded-mini bg-aquamarine flex flex-col items-start justify-start pt-10 pb-[41px] pl-[41px] pr-5 box-border gap-[25px] min-w-[487px] max-w-full z-[5] text-left text-21xl text-black font-lexend-deca mq850:min-w-full mq1525:flex-1 ${className}`}
      style={experienceCardContentStyle}
    >
      <div className="w-[749px] h-[236px] relative rounded-mini bg-aquamarine hidden max-w-full" />
      <h2 className="m-0 relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[6] mq450:text-5xl mq850:text-13xl">
        {theRightExperience}
      </h2>
      <div className="w-[676px] relative text-13xl font-light inline-block max-w-full z-[6] mq450:text-lgi mq850:text-7xl">
        {yearsOfProvenSuccessInHealthca}
      </div>
    </div>
  );
};

ExperienceCardContent.propTypes = {
  className: PropTypes.string,
  theRightExperience: PropTypes.string,
  yearsOfProvenSuccessInHealthca: PropTypes.string,

  /** Style props */
  experienceCardContentFlex: PropTypes.string,
  experienceCardContentMinWidth: PropTypes.string,
};

export default ExperienceCardContent;
