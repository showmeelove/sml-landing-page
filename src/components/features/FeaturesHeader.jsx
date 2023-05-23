import icon2 from "../../assets/images/heroIcon22.png";
import icon3 from "../../assets/images/featureIcon1.png";

const FeaturesHeader = () => {
	return (
    <div className=" flex flex-col max-w-[790px] mx-auto pt-[4rem] justify-center items-center">
      <h2 className="text-[#001534]  font-Eina01Bold text-[48px] font-medium text-center leading-[55px] mb-[33px]">
        helping you build a community out of your audience
      </h2>
      <p className="text-center text-[#565656] font-medium font-figtree text-[20px]">
        our platform is designed with creators like you in mind. you{"'"}ll have
        all the tools you need to deepen your connection with your audience.
      </p>
      <div className="flex gap-x-5 mt-[2rem]">
        <div>
          <img src={icon2} alt="/" />
        </div>
        <div>
          <img src={icon3} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesHeader;
