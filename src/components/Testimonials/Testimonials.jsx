import { quotes } from "../../assets";
import { feedback } from "../../constants";
import styles from "../../style";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
    <img
      src={quotes}
      alt="double_quotes"
      className="h-[27px] w-[42px] object-contain"
    />
    <p className="my-10 font-poppins text-[18px] font-normal leading-[32px] text-white">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4 className=" font-poppins text-[20px] font-semibold leading-[32px] text-white">
          {name}
        </h4>
        <p className=" font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
  >
    <div className="blue__gradient absolute -right-[50%] z-[0] h-[60%] w-[60%] rounded-full" />
    <div className="relative z-[1] flex w-full flex-col items-center justify-between md:flex-row">
      <h1 className={styles.heading2}>
        What people are <br className=" hidden sm:block" /> saying about us
      </h1>
      <div className="mt-6 w-full md:mt-0">
        <p className={`${styles.paragraph}text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
