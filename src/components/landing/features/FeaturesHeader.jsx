import icon2 from "../../../assets/images/featureIcon1.png";
import icon3 from "../../../assets/images/featureIcon2.png";

const FeaturesHeader = () => {
  return (
    <>
      <div className="relative" id="features">
        <div className={`absolute md:top-[290px] z-10 md:left-[60px] lg:top-[60px] lg:left-[240px] top-[250px] left-[108px]`}>
          <img src={icon3} width={65} height={75} alt="featue memoji" />
        </div>
        <div className={`absolute md:top-[280px] md:right-[30px] lg:top-[230px] lg:right-[240px] top-[250px] right-[80px]`}>
          <img src={icon2} width={65} height={75} alt="feature memoji" />
        </div>
      </div>
      <div className=" flex flex-col max-w-[340px] md:max-w-[790px] mx-auto justify-center items-center">
        <h2 className="text-[#001534] text-[26px] leading-[30.47px] font-Eina01Bold md:text-[48px] md:mt-[65px] mt-[37px] font-medium text-center md:leading-[55px] mb-[33px]">
          helping you build a community out of your audience
        </h2>
        <p className="text-center md:mx-10  text-[#565656] font-medium font-figtree text-[15px] leading-[25px] md:text-[20px] md:leading-[33px]">
          our platform is designed with creators like you in mind. you{"'"}ll
          have all the tools you need to deepen your connection with your
          audience.
        </p>
      </div>
    </>
  );
};

export default FeaturesHeader;
