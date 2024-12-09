import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[247px] pl-5 pr-[757px] box-border max-w-full text-left text-45xl text-black font-lexend-deca mq450:pr-5 mq450:box-border mq850:pr-[189px] mq850:pb-[161px] mq850:box-border mq1225:pr-[378px] mq1225:box-border ${className}`}
    >
      <div className="w-[777px] mt-32 flex flex-col items-start justify-start gap-[30px] max-w-full z-[3] scale-90">
        <motion.div 
          variants={containerVariants}
          className="self-stretch flex flex-col items-start justify-start gap-3.5"
        >
          <motion.h1 
            variants={itemVariants}
            className="m-0 relative text-inherit font-[inherit] mq450:text-19xl mq850:text-32xl z-[3]"
          >
            <span className="font-light">{`Transforming `}</span>
            <span className="font-medium text-transparent !bg-clip-text [background:linear-gradient(96.69deg,_#41ebbe,_#19b78d_16.1%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Healthcare Facilities
            </span>
            <span className="font-light">{` with `}</span>
            <span className="font-medium text-transparent !bg-clip-text [background:linear-gradient(99.12deg,_#7181da,_#30409a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Expertise and Innovation
            </span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="self-stretch relative z-[3] text-5xl font-light text-darkslategray mq450:text-lgi"
          >
            Comprehensive strategies and solutions for hospitals.
          </motion.div>
        </motion.div>
        
        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer [border:none] py-[21px] pl-8 pr-[31px] bg-darkslateblue-200 rounded-lg flex flex-row items-start justify-start gap-[18px]"
        >
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <motion.div 
              variants={itemVariants}
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20 
              }}
            >
              <Image
                className="w-[29px] h-[29px] relative"
                width={29}
                height={29}
                alt=""
                src="/vuesaxlinearcall.svg"
              />
            </motion.div>
          </div>
          <a 
            href="tel:+919447008356" 
            className="relative text-9xl [text-decoration:none] font-lexend-deca text-white text-left mq450:text-3xl"
          >
            Get in touch
          </a>
        </motion.button>
      </div>
    </motion.section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;