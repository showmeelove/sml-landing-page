import twitter from "../../assets//images/twitter.png";const footer = () => {
  return (
    <footer className={`mx-auto  py-[40px] overflow-hidden bg-[#ffffff]`}>
      <div className="mx-[100px] flex flex-col items-center md:flex md:flex-row md:justify-between md:items-center">
        <h1
          className={`bg-clip-text text-transparent text-[26px] leading-[30.47px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]`}
        >
          showmeelove.
        </h1>
        <div>
          <ul className="flex mt-[32px] md:mt-0 flex-col items-center gap-[10px] md:flex md:flex-row md:justify-between md:space-x-[43px] md:items-center">
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
            <button className="mt-[25px] md:mt-0 w-[200px] font-figtree py-[20px] tetx-[17px] md:text-[18px] leading-[33pxx] text-center rounded-[40px] bg-[#001534] hover:bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              create my page
            </button>
          </ul>
        </div>
        {/* long line */}
      </div>
      <div className="border-solid border-[1px] mx-autp md:mx-[100px] mt-[35px] border-[#EEEEEE]"></div>
      <div className="mx-[100px] mt-[34px] flex flex-col gap-[20px] items-center  md:flex md:flex-row md:justify-between md:items-center">
        <div>
          <h1
            className={`mx-auto text-[#001534] text-[16px] leading-[19.2px] md:text-[20px] md:leading-[33px] font-figtree font-medium`}
          >
            all rights reserved.
          </h1>
        </div>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={twitter} width={50} height={50} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
