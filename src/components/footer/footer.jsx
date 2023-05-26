import twitter from "../../assets//images/twitter.png";

const footer = () => {
  return (
    <footer className={`mx-auto  py-[40px] overflow-hidden bg-[#ffffff]`}>
      <div className="mx-[100px]  flex justify-between items-center">
        <h1
          className={`bg-clip-text text-transparent text-[26px] leading-[30.47px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]`}
        >
          showmeelove.
        </h1>
        <div>
          <ul className="hidden md:flex md:justify-between md:space-x-[43px] md:items-center">
            <li>
              <a
                className="text-[20px] text-[#001534] font-medium font-figtree leading-[33px] "
                href="#"
              >
                features
              </a>
            </li>
            <li>
              <a
                className="text-[20px] text-[#001534] font-medium font-figtree leading-[33px] "
                href="#"
              >
                faqs
              </a>
            </li>
            <button className="h-[69px] w-[200px] font-figtree text-[18px] leading-[33pxx] text-center rounded-[40px] bg-[#001534]">
              get early access
            </button>
          </ul>
          {/* long line */}
        </div>
      </div>
      <div className="border-solid border-[1px] mx-[100px] mt-[35px] border-[#EEEEEE]"></div>
      <div className="mx-[100px] mt-[34px] flex justify-between items-center">
        <div>
          <h1
            className={`mx-auto text-[#001534] text-[20px] leading-[33px] font-figtree font-medium`}
          >
            all rights reserved.
          </h1>
        </div>
        <div>
          <img src={twitter} width={50} height={50} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default footer;
