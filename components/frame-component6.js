import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  
  // Scroll animation states
  const [isVisible, setIsVisible] = useState({
    title: false,
    form: false,
    contactDetails: false
  });

  // Refs for scroll animation
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactDetailsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            setIsVisible(prev => ({...prev, title: true}));
          }
          if (entry.target === formRef.current) {
            setIsVisible(prev => ({...prev, form: true}));
          }
          if (entry.target === contactDetailsRef.current) {
            setIsVisible(prev => ({...prev, contactDetails: true}));
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (titleRef.current) observer.observe(titleRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (contactDetailsRef.current) observer.observe(contactDetailsRef.current);

    // Cleanup
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (contactDetailsRef.current) observer.unobserve(contactDetailsRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="contact"
      className={`flex mx-auto max-w-full scale-90 flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[37px] text-left text-29xl text-black font-lexend-deca mq850:gap-[18px] ${className}`}
    >
      <h1 
        ref={titleRef}
        className={`m-0 w-[778px] relative text-inherit font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq850:text-19xl 
          transition-all duration-1000 ease-out 
          ${isVisible.title 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }`}
      >
        Let's Discuss Your Needs
      </h1>
      
      <div 
        ref={formRef}
        className={`self-stretch flex flex-row items-start justify-start gap-[53px] max-w-full text-5xl text-gray-200 mq850:gap-[26px] mq1525:flex-wrap
          transition-all duration-1000 ease-out delay-300
          ${isVisible.form 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }`}
      >
        <form 
          onSubmit={handleSubmit}
          className="flex-1 shadow-[-554px_859px_286px_rgba(0,_0,_0,_0),_-355px_550px_262px_rgba(0,_0,_0,_0),_-200px_309px_221px_rgba(0,_0,_0,_0.01),_-89px_137px_164px_rgba(0,_0,_0,_0.02),_-22px_34px_90px_rgba(0,_0,_0,_0.02)] rounded-mini bg-gray-100 border-gray-400 border-[2px] border-solid box-border flex flex-col items-start justify-start pt-[21px] pb-[17px] pl-[21px] pr-5 gap-[17px] max-w-full mq850:min-w-full"
        >
          <div className="self-stretch h-[94px] rounded-2xs bg-gainsboro-100 border-gray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[30px] px-9 z-[1]">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full [border:none] [outline:none] font-light font-lexend-deca text-5xl bg-[transparent] relative text-gray-200 text-left inline-block p-0 mq450:text-lgi"
              placeholder="Enter your Name here..."
              type="text"
              required
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[15.5px] max-w-full mq850:flex-wrap">
            <div className="flex-1 rounded-2xs bg-gainsboro-100 border-gray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[30px] px-9 min-w-[279px] min-h-[94px] max-w-full z-[1]">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full [border:none] [outline:none] font-light font-lexend-deca text-5xl bg-[transparent] relative text-gray-200 text-left inline-block p-0 mq450:text-lgi"
                placeholder="Enter your Email..."
                type="email"
                required
              />
            </div>
            <div className="flex-1 rounded-2xs bg-gainsboro-100 border-gray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[30px] px-9 min-w-[279px] min-h-[94px] max-w-full z-[1]">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full [border:none] [outline:none] font-light font-lexend-deca text-5xl bg-[transparent] relative text-gray-200 text-left inline-block p-0 mq450:text-lgi"
                placeholder="Enter your Phone number..."
                type="tel"
                required
              />
            </div>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-gray-300 border-[1px] border-solid bg-gainsboro-100 h-[167px] w-auto [outline:none] self-stretch rounded-2xs box-border flex flex-row items-start justify-start py-[26px] px-9 font-lexend-deca font-light text-5xl text-gray-200 z-[1]"
            placeholder="Type your message here..."
            rows={8}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cursor-pointer [border:none] py-[21px]  bg-darkslateblue-200 self-stretch rounded-lg flex flex-row items-start justify-center z-[1] hover:bg-cornflowerblue mq450:pl-5 mq450:pr-5 mq450:box-border ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="relative text-5xl font-lexend-deca text-gray-100 text-left mq450:text-3xl">
              {isSubmitting ? "Sending..." : "Submit Message"}
            </div>
          </button>

          {/* Status messages */}
          {submitStatus === "success" && (
            <div className="w-full text-center text-green-600 font-medium">
              Message sent successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="w-full text-center text-red-600 font-medium">
              Failed to send message. Please try again.
            </div>
          )}
        </form>

        <div 
          ref={contactDetailsRef}
          className={`flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[541px] max-w-full text-17xl text-black mq850:min-w-full mq1525:flex-1
            transition-all duration-1000 ease-out delay-500
            ${isVisible.contactDetails 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
            }`}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full mq850:gap-[19px]">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <Image
                className="h-2.5 w-2.5 absolute !m-[0] bottom-[10px] left-[160px] object-contain"
                width={10}
                height={10}
                alt=""
                src="/arrow-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
                <h3 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-3xl mq850:text-10xl">
                  Contact Details
                </h3>
                <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start  box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq850:pl-[60px] mq850:pr-[60px] mq850:box-border">
                    <div className="h-[123px] w-[541px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1743085275857!2d76.3462697750312!3d10.002456390103047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xca9030127b83201%3A0xcadf90def7631322!2sGrand%20Mark!5e0!3m2!1sen!2sin!4v1733707175361!5m2!1sen!2sin" 
                      width="600" 
                      height="123"  
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="relative text-5xl font-light text-darkslategray inline-block max-w-full mq450:text-lgi">
                    <p className="m-0">17/305, First Floor, Thrikkakara</p>
                    <p className="m-0">Sea Port Airport Road, Chittethukara, 682030,</p>
                    <p className="m-0">Kakkanad, Kochi, Kerala, India</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/mDLs4bMe2iZ3ZuZG7" 
                  className="relative text-5xl [text-decoration:underline] font-light text-darkslategray mq450:text-lgi"
                >
                  View in Maps
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px] max-w-full text-5xl text-darkslategray">
              <div className="flex flex-row items-start justify-start gap-2.5">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <Image
                    className="w-6 h-6 relative"
                    width={24}
                    height={24}
                    alt=""
                    src="/vuesaxlinearsms.svg"
                  />
                </div>
                <a 
                  href="mailto:info@srhealthcarecommunity.com" 
                  className="relative [text-decoration:none] text-black font-light mq450:text-lgi"
                >
                  info@srhealthcarecommunity.com
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-2.5">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <Image
                    className="w-6 h-6 relative"
                    width={24}
                    height={24}
                    alt=""
                    src="/vuesaxlinearcallcalling.svg"
                  />
                </div>
                <div className="relative font-light mq450:text-lgi">
                  <a 
                    href="tel:+919447008356" 
                    className="[text-decoration:none] text-black"
                  > 
                    +91 9447008356 
                  </a>  
                  ,
                  <a 
                    href="tel:+919447108356" 
                    className="[text-decoration:none] text-black"
                  > 
                    +91 9447108356 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;