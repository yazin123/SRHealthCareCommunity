import Image from "next/image";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const FrameComponent4 = ({ className = "" }) => {
  const backgroundStyle = {
    backgroundImage: "url('/star-14.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const features = [
    "Social network connecting medical & healthcare professionals",
    "Knowledge hub for students, professors, doctors and others",
    "Informative blogs, trending updates, and expert discussion panels",
    "Job search and opportunity postings platform",
    "Expert-led query resolution at your fingertips",
    "Access to live and recorded seminars on-demand"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`
        flex mq850:flex-wrap-reverse
        items-center justify-between 
        w-full max-w-7xl 
        mx-auto 
        py-8 px-2
        space-y-8 lg:space-y-0 
        font-lexend-deca 
        ${className}
      `}
    >
      {/* Text Content */}
      <div className="w-1/2 mq850:w-full space-y-2 lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="
            text-7xl
            font-medium 
            text-black 
            mb-4
          ">
            Introducing our Application
          </h1>
          <p className="
            text-lgi 
            text-darkslategray 
            mb-6
          ">
            Our Mobile Application for SR Healthcare Community
          </p>
        </motion.div>

        {/* Features with Star Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.4,
            staggerChildren: 0.2 
          }}
          className="px-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="
                flex 
                items-start 
                space-x-2
                justify-start 
              "
            >
              <div
                className="
                  relative 
                  w-[45px] h-[45px] 
                  flex-shrink-0 
                  flex justify-center items-center
                "
                style={backgroundStyle}
              >
                <Image
                  className="
                    absolute 
                    top-1/4 left-1/4 
                    rounded-5xs-8 
                    w-[20px] h-[20px] 
                    z-10
                  "
                  width={29}
                  height={29}
                  alt="Star detail"
                  src="/star-15.svg"
                />
              </div>
              <p className="text-left">{feature}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Install Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-start lg:justify-start"
        >
          <button className="
            bg-darkslateblue-200 
            text-white 
            text-lgi
            font-lexend-deca
            px-6 py-3 
            rounded-lg  
            flex items-center 
            gap-4 
            mt-6
            hover:bg-darkslateblue-100 
            transition-colors 
            duration-300
          ">
            Install Now
          </button>
        </motion.div>
      </div>

      {/* Phone Image Container */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="
          w-1/2 mq850:w-full 
          mt-8 lg:mt-0 
          flex flex-col 
          items-center 
          justify-center
        "
      >
        <div className="
          relative 
          w-full 
          max-w-md 
          transform 
          scale-75 
          sm:scale-90 
          lg:scale-100
        ">
          <Image
            className="
              w-full 
              h-auto 
              object-contain
            "
            width={1078}
            height={801}
            alt="Phone application mockup"
            src="/image-3@2x.png"
            priority
          />

          {/* App Store Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.7,
              staggerChildren: 0.2 
            }}
            className="
              mt-4 
              flex 
              flex-col 
              sm:flex-row 
              justify-center 
              space-y-4 
              sm:space-y-0 
              sm:space-x-4
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="
                  rounded-2xs-2 
                  w-[250px] 
                  sm:w-[272px] 
                  h-auto 
                  object-contain
                  cursor-pointer
                  hover:opacity-80
                  transition-opacity
                  duration-300
                "
                loading="lazy"
                width={272}
                height={81}
                alt="App Store"
                src="/image-4@2x.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                className="
                  rounded-lg 
                  w-[250px] 
                  sm:w-[271px] 
                  h-auto 
                  object-contain
                  cursor-pointer
                  hover:opacity-80
                  transition-opacity
                  duration-300
                "
                loading="lazy"
                width={271}
                height={81}
                alt="Google Play"
                src="/image-5@2x.png"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;