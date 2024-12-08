import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const AdministrationCardContent = ({
  className = "",
  frameDivFlex,
  frameDivMinWidth,
  hospitalAdministrationManagement,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: frameDivFlex,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivFlex, frameDivMinWidth]);

  return (
    <div
      className={`flex-1 rounded-mini bg-darkslateblue-600 flex flex-row items-start justify-start pt-[25px] px-[26px] pb-6 box-border gap-[18px] min-w-[487px] max-w-full text-left text-13xl text-black font-lexend-deca mq850:flex-wrap mq850:min-w-full ${className}`}
    >
      <div className="h-[141px] w-[749px] relative rounded-mini bg-darkslateblue-600 hidden max-w-full" />
      <Image
        className="h-[92px] w-[92px] relative rounded-smi z-[1]"
        loading="lazy"
        width={92}
        height={92}
        alt=""
        src="/star-1.svg"
      />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border min-w-[378px] max-w-full mq850:min-w-full"
        style={frameDivStyle}
      >
        <div className="relative z-[1] mq450:text-lgi mq850:text-7xl">
          {hospitalAdministrationManagement}
        </div>
      </div>
    </div>
  );
};

AdministrationCardContent.propTypes = {
  className: PropTypes.string,
  hospitalAdministrationManagement: PropTypes.string,

  /** Style props */
  frameDivFlex: PropTypes.string,
  frameDivMinWidth: PropTypes.string,
};

export default AdministrationCardContent;
