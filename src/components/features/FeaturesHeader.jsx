import icon2 from "../../assets/images/featureIcon1.png";
import icon3 from "../../assets/images/featureIcon2.png";

const FeaturesHeader = () => {
  return (
    <>
      <div className="relative">
        <div className={`absolute top-[56px] left-[157px]`}>
          <img src={icon3} width={75} height={75} alt="featue memoji" />
        </div>
        <div className={`absolute top-[189px] right-[187px]`}>
          <img src={icon2} width={75} height={75} alt="feature memoji" />
        </div>
      </div>
      <div className=" flex flex-col max-w-[790px] mx-auto justify-center items-center">
        <h2 className="text-[#001534]  font-Eina01Bold text-[48px] mt-[65px] font-medium text-center leading-[55px] mb-[33px]">
          helping you build a community out of your audience
        </h2>
        <p className="text-center text-[#565656] font-medium font-figtree text-[20px]">
          our platform is designed with creators like you in mind. you{"'"}ll
          have all the tools you need to deepen your connection with your
          audience.
        </p>
      </div>
    </>
  );
};

export default FeaturesHeader;
