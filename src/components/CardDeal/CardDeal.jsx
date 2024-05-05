import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "../Button/Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better buard deal <br className=" hidden sm:block" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        We've been researching and comparing credit cards for over 15 years. You
        can easily compare more than 270 Australian credit cards using our free
        tools. When you find one that suits, we'll take you securely to the
        bank's website.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="h-[100%] w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
