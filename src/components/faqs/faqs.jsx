import { useState } from "react";
import FAQCard from "./faqcard";
import { faqs } from "../../utils/faqs";
// import Heading from "../Heading/Heading";
import faqmemoj from "../../assets/images/faqmemeoji2.png";
import faqmemoji from "../../assets/images/faqmemoji2.png";

const FAQ = () => {
  const [Open, setopen] = useState(false);
  const [clicked, setclicked] = useState("0");

  const handleToggle = (index) => {
    console.log(index);
    if (clicked === index) {
      return setclicked("0");
    }
    setclicked(index);
  };
  const textColor = Open ? "text-[#004DB3]" : "text-black";

  return (
    <div className="w-[100%] bg-[#F5F5F5] mx-auto py-[3rem] relative">
      <img
        src={faqmemoji}
        alt="memoji"
        width={80}
        height={80}
        className="lg:block md:hidden left-[12px] lg:absolute md:absolute lg:bottom-[50.5px] lg:left-[90px] hidden"
      />
      <img
        src={faqmemoj}
        alt="memoji"
        width={80}
        height={80}
        className="lg:block md:hidden absolute lg:bottom-[509px] lg:right-[95.65px] hidden "
      />
      <div className="flex sm:hidden justify-between  w-[50%] mx-auto mb-2 ">
        <img
          src={faqmemoji}
          alt="memoji"
          width={70}
          height={70}
          className="flex-start"
        />
        <img
          src={faqmemoj}
          alt="memoji"
          width={70}
          height={70}
          className="flex-end"
        />
      </div>

      <h2 className="text-center text-[26px] md:text-[48px] mt-[108px] md:leading-[55px] text-[#001534] font-Eina01Bold font-bold mb-[3.9rem]">
        frequently asked questions
      </h2>
      <div className="flex flex-col flex-wrap items-center justify-center mx-auto">
        {faqs.map((faq, idx) => (
          <FAQCard
            faq={faq}
            key={idx}
            active={clicked === idx}
            onToggle={() => handleToggle(idx)}
            className={`transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
