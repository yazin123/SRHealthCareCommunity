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
import Link from "next/link";

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
        <div className="relative font-light text-[12px] grid grid-cols-5 mq450:grid-cols-1">
          <span>© 2024 SR Healthcare Community, All rights reserved.</span>
          <span className="text-center"><Link href="/terms-and-conditions">Terms & Conditions</Link></span>
          <span className="text-center"><Link href="/privacy-policy">Privacy Policy</Link></span>
          <span className="text-center"><Link href="/refund-policy">Refund Policy</Link></span>
          <span className="text-center"><Link href="/shipping-and-delivery">Shipping and Delivery</Link></span>
        
        </div>
      </footer>
    </div>
  );
};

export default MacBookPro16;
