import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";
const Billing = () => (
  <section id="product" className={layout.sectionImgReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="z- [5] relative h-[100%]
    w-[100%]"
      />
      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your
        <br className="hidden sm:block" /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        We consider the payment methods you'll offer your customers when you
        start your business. This is an important part of managing your business
        cash flow and meeting your customer's needs.
      </p>
      <div className=" mt-6 flex flex-row flex-wrap sm:mt-10">
        <img
          src={apple}
          alt="google_store"
          className="mr-5 h-[42px]
      w-[128px] cursor-pointer object-contain"
        />
        <img
          src={google}
          alt="google_store"
          className="h-[42px] w-[128px]
      cursor-pointer object-contain"
        />
      </div>
    </div>
  </section>
);

export default Billing;
