import FeaturesCard from "./featurecard";
import FeaturesHeader from "./FeaturesHeader.jsx";
import money from "../../../assets/images/donate.svg";
import cart from "../../../assets/images/sell.svg";
import gem from "../../../assets/images/offer.svg";
import volt from "../../../assets/images/take.svg";
import hit from "../../../assets/images/crowdfund.svg";
import gift from "../../../assets/images/fan.svg";

const Features = () => {
  return (
    <div className="w-[100%] bg-[#F5F5F5] mx-auto pb-[2rem]">
      <FeaturesHeader />
      <div className="flex mt-[100px] flex-wrap flex-col sm:flex-row items-center justify-center gap-[20px] md:mt-[83px] mx-auto sm:w-[95%]">
        <FeaturesCard
          icon={money}
          text={
            "give your audience a fun and easy way to say thanks. they don’t need to create an account."
          }
          title={"receive donations"}
        />
        <FeaturesCard
          icon={cart}
          text={
            "sell things you don’t need a shopify or selar store for. could be a 1-1 zoom call, books, arts, etc."
          }
          title={"sell your products"}
        />
        <FeaturesCard
          icon={gem}
          text={
            "earn recurring income by letting fans show you love on an ongoing basis as you want."
          }
          title={"offer memberships"}
        />
        <FeaturesCard
          icon={volt}
          text={
            "offer your fans personalized services like custom work or pay for direct access to you."
          }
          title={`take commissions`}
        />
        <FeaturesCard
          icon={hit}
          text={
            "let your fans help you raise money for a project/goal or contribute to help you smash it."
          }
          title={"crowdfunding goals"}
        />
        <FeaturesCard
          icon={gift}
          text={
            "give your audience a reward (exclusive post, content, member-only products) for showing you love."
          }
          title={"fan rewards"}
        />
      </div>
    </div>
  );
};

export default Features;
