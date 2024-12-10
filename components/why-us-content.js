import React from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import ExperienceCardContent from "./experience-card-content";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const WhyUsContent = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = true
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
      className={`mx-auto max-w-7xl px-3 flex flex-col items-start justify-start pt-0 pb-[25px] box-border gap-11 text-left text-29xl text-black font-lexend-deca mq850:gap-[22px] ${className}`}
    >
      <motion.h1
        variants={itemVariants}
        className="m-0 relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq850:text-19xl"
      >
        Why Us?
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="self-stretch flex flex-col items-start justify-start gap-4 text-[24px]"
      >
        <motion.div
          variants={containerVariants}
          className="self-stretch flex flex-row items-start justify-start gap-4 mq1525:flex-wrap"
        >
          <motion.div variants={itemVariants}>
            <ExperienceCardContent
              theRightExperience="The Right Experience"
              yearsOfProvenSuccessInHealthca="Years of proven success in healthcare operations."
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-row items-start justify-start relative min-w-[487px] mq850:min-w-full mq1525:flex-1"
          >
            <div className="h-[2143.3px] w-[1269.9px] absolute !m-[0] top-[-1578px] left-[-380.9px]">
              <div className="absolute top-[-324.9px] left-[56.9px] w-[1528.8px] h-[1441.9px] z-[1]">
                <div className="absolute top-[100px] left-[244.8px] w-[1244px] h-[1314px]">
                  <div className="absolute top-[507.1px] left-[381.73px] rounded-3xs bg-lightcyan w-[403.1px] h-[403.1px] [transform:_rotate(15deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[0px] left-[283.1px] rounded-mid bg-silver w-[994.8px] h-[1093.8px] [transform:_rotate(15deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[563.38px] left-[194.2px] rounded-mid bg-darkslateblue-500 w-[538.9px] h-[538.9px] [transform:_rotate(-15deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <motion.div
                  initial={{}}
                  animate={mainControls}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    className="absolute top-[740.9px] mq850:hidden left-[0px] w-[1609px] h-[601px] object-contain z-[2]"
                    width={1469}
                    height={981}
                    alt=""
                    src="/image-2@2x.png"
                  />
                </motion.div>
              </div>
              <Image
                className="absolute top-[896px] mq850:hidden left-[424.9px]  w-[950px] h-[587px] z-[3]"
                loading="lazy"
                width={850}
                height={887}
                alt=""
                src="/rectangle-6.svg"
              />
              <Image
                className="absolute top-[666px] mq850:hidden -right-64 w-[1198.5px] h-[1097.3px] object-contain z-[4]"
                width={1499}
                height={1277}
                alt=""
                src="/remove-background-project-1-1@2x.png"
              />
            </div>
            <motion.div variants={itemVariants}>
              <ExperienceCardContent
                experienceCardContentFlex="1"
                experienceCardContentMinWidth="unset"
                theRightExperience="The Right Expertise"
                yearsOfProvenSuccessInHealthca="A multidisciplinary team of experts across domains."
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4"
        >
      
          <motion.div
            variants={itemVariants}
            className="flex-1 rounded-mini h-52 bg-aquamarine  flex flex-col items-start justify-start pt-10 pb-[41px] pl-[41px] pr-5 box-border gap-7 min-w-[562px] mq850:min-w-full"
          >
            <div className="w-[749px] h-[236px] relative rounded-mini bg-aquamarine text-black  hidden" />
            <motion.h2
              variants={itemVariants}
              className="m-0 relative text-inherit  font-normal  font-[inherit] inline-block max-w-full z-[1] mq450:text-5xl mq850:text-13xl text-black"
            >
             The Right Economics
            </motion.h2>
           <span className="font-thin">
           Solutions that maximize efficiency and minimize costs</span>
         
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex-1 rounded-mini h-52 bg-darkslateblue-200 text-white flex flex-col items-start justify-start pt-10 pb-[41px] pl-[41px] pr-5 box-border gap-7 min-w-[562px] mq850:min-w-full"
          >
            <div className="w-[749px] h-[236px] relative rounded-mini bg-darkslateblue-200 hidden" />
            <motion.h2
              variants={itemVariants}
              className="m-0 relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[1] mq450:text-5xl mq850:text-13xl"
            >
              Discover Services offered by Us
            </motion.h2>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer [border:none] py-[10px] pl-9 pr-[35px] bg-white rounded-lg flex flex-row items-start justify-start z-[1] hover:text-[#19B78D]"
            >
              <a
                href="#services"
                className="relative text-9xl font-lexend-deca text-darkslateblue-200 text-left [text-decoration:none] hover:text-[#19B78D]"
              >
                View Services
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

WhyUsContent.propTypes = {
  className: PropTypes.string,
};

export default WhyUsContent;