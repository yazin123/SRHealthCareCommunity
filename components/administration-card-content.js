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
      className={`flex-1 rounded-mini bg-darkslateblue-600 flex flex-row min-h-40 items-center justify-start pt-[25px] px-[26px] pb-6 box-border gap-[18px] min-w-[487px] max-w-full text-left text-13xl text-black font-lexend-deca mq850:flex-wrap mq850:min-w-full ${className}`}
    >
      <Image
        className="h-[62px] w-[62px] relative rounded-smi z-[1]"
        loading="lazy"
        width={92}
        height={92}
        alt=""
        src="/star-1.svg"
      />


        {hospitalAdministrationManagement}

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
