import Image from "next/image";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const FrameComponent3 = ({ className = "" }) => {
  const expertiseItems = [
    "Medical Expertise",
    "Financial Expertise", 
    "Architectural Expertise",
    "Technological Expertise"
  ];

  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`self-stretch scale-90 flex flex-row items-start justify-center pt-0 pb-[88px] pl-5 pr-[716px] box-border max-w-full text-left text-29xl text-black font-lexend-deca mq450:pr-5 mq450:box-border mq850:pr-[179px] mq850:pb-[57px] mq850:box-border mq1225:pr-[358px] mq1225:box-border ${className}`}
    >
      <div className="w-[818px] flex flex-col items-start justify-start gap-[26px] max-w-full -mt-32">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="m-0 w-[778px] relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq850:text-19xl"
        >
          Who We Are?
        </motion.h1>
        
        <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full text-13xl text-darkslategray mq450:gap-4">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative font-light text-[24px]"
          >
            SR First Aid Healthcare Pvt Ltd. is a multidisciplinary team of
            healthcare strategists, facility planners, and operational experts.
            Combining medical, financial, architectural, and technological
            expertise under one roof, we deliver tailored solutions for your
            healthcare facility's unique challenges.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              staggerChildren: 0.2 
            }}
            className="grid gap-3 grid-cols-2 mq850:grid-cols-1"
          >
            {expertiseItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-2 items-center"
              >
                <div className="bg-darkslateblue-200 rounded-full h-10 w-10 flex justify-center items-center">
                  <Image 
                    className="w-5 h-5" 
                    loading="lazy" 
                    width={12} 
                    height={8} 
                    alt="" 
                    src="/vector-1.svg" 
                  />
                </div>
                <span className="text-[24px]">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;