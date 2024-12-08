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
      {/* <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[76px] pl-5 pr-[757px] box-border max-w-full text-left text-5xl text-darkslategray font-lexend-deca mq450:pr-5 mq450:box-border mq850:pr-[189px] mq850:box-border mq1225:pr-[378px] mq1225:box-border">
        <div className="w-[777px] flex flex-col items-start justify-start gap-[42px] max-w-full mq450:gap-[21px]">
          <div className="self-stretch relative font-light mq450:text-lgi">
            Trusted by
          </div>
          <div className="flex flex-row items-end justify-start gap-[36.1px] mq450:gap-[18px]">
            <Image
              className="h-[39px] w-[132.1px] relative"
              loading="lazy"
              width={132}
              height={39}
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.1px]">
              <Image
                className="self-stretch h-[32.7px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                width={147}
                height={33}
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
        </div>
      </section> */}
      <FrameComponent3 />
      <section className="w-[1641px] flex flex-col items-start justify-start pt-0 pb-[100px] pl-5 pr-0 box-border gap-8 max-w-full mq850:gap-4 mq850:pb-5 mq850:box-border mq1225:pb-[27px] mq1225:box-border">
        <WhyUsContent />
      </section>
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
