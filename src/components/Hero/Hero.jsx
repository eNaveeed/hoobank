import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "../GetStarted/GetStarted";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
    >
      <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
        <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
        <p className={`${styles.paragraph}`}>
          {" "}
          <span className="ml-1 text-white">20%</span> discount For {""}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100px]">
          The Next <br className="hidden sm:block" /> {""}
          <span className="text-gradient">Generation</span> {""}
        </h1>
        <div className="mr-0 hidden ss:flex md:mr-4">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100px]">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Our team of experts use a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
      <img src={robot} alt="billing" className="relative z-[5] w-[100%]" />
      <div className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
      <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
      <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[50%] w-[50%]" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
