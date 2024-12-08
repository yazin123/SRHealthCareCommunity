import Image from "next/image";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent3 from "../components/frame-component3";
import WhyUsContent from "../components/why-us-content";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import Footer from "../components/footer";

const MacBookPro16 = () => {
  return (
    <div className="w-full  relative  bg-white overflow-hidden flex flex-col items-end justify-start pt-8 px-0 pb-0 box-border gap-[35px] leading-[normal] tracking-[normal] mq450:gap-[17px]">
      <FrameComponent />
      <FrameComponent1 />

      <FrameComponent3 />
        <WhyUsContent />
      <FrameComponent2 />
      <FrameComponent4 />
      {/* <FrameComponent5 /> */}
      <FrameComponent6 />

      <Footer />
      <footer className="self-stretch [background:linear-gradient(100.75deg,_#41ebbe,_#19b78d)] flex flex-row items-start justify-start py-[22.5px] px-[107px] text-left text-7xl text-black font-lexend-deca mq450:pl-[26px] mq450:pr-[26px] mq450:box-border mq1225:pl-[53px] mq1225:pr-[53px] mq1225:box-border">
        <div className="relative font-light text-[12px] scale-">
          © 2024 SR Healthcare Community, All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MacBookPro16;
