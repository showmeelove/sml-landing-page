// import money from "../../assets/images/moneyIcon.png";

// eslint-disable-next-line react/prop-types
const FeaturesCard = ({ title, text, icon }) => (
  <div className="lg:w-[353px] w-[90%] text-[#565656]  h-[357px] flex flex-col items-center justify-center border-[2px] border-[#EEEEEE] border-solid bg-[#fff] drop-shadow-l p-[1rem] rounded-[30px] transition duration-500 hover:scale-105">
    <div className="min-w-[50px]">
      <img src={icon} className="lg:w-[80px]" alt="feature images" />
    </div>
    <h2 className="font-semibold font-figtree mt-[35px] leading-[26px] text-[#001534] text-[center] text-[20px]">
      {title}
    </h2>
    <p className="text-[17px] mt-[15px] leading-[28px] font-figtree font-normal text-center text-[#565656] max-w-[281px]">
      {text}
    </p>
  </div>
);

export default FeaturesCard;
