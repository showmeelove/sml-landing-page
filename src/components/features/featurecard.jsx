// import money from "../../assets/images/moneyIcon.png";

// eslint-disable-next-line react/prop-types
const FeaturesCard = ({ title, text, icon }) => (
  <div className="w-[350px] text-[#565656]  h-[350px] flex flex-col gap-y-[1rem] items-center justify-center border-[1px] border-[#EEEEEE] bg-[#fff] drop-shadow-l p-[1rem] rounded-[25px]">
    <div className="w-[50px]">
      <img src={icon} alt="feature images" />
    </div>
    <h2 className="font-semibold font-figtree mt-[41.5px] leading-[26px] text-[#001534] text-[center] text-[20px]">
      {title}
    </h2>
    <p className="text-[17px] mt-[32px] leading-[28px] font-figtre font-normal text-center text-[#565656] max-w-[281px]">
      {text}
    </p>
  </div>
);

export default FeaturesCard;
