import Form from "./components/mail/form";
import Memoji from "./components/mail/memojis";
import Features from "./components/features/features";
import Faqs from "./components/faqs/faqs";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="mx-auto containr overflow-x-hidden">
      <div className="hero-pattern"></div>
      <div className="gradient"></div>
      <div className="rounded-b-[60px] bg-[#010E2]  py-[10px] ">
        <div className="mt-[28px] mx-[19px] md:mt-[30.5px] md:mx-[50px] md:flex md:justify-between md:items-center">
          <a
            href="#"
            className="text-[22px] leading-[25.78px] text-[#FEFEFE] font-Eina01Bold md:text-[26px] md:leading-[30.47px]"
          >
            showmeelove.
          </a>

          <nav className="">
            <ul className="hidden md:flex md:justify-between md:space-x-[43px] md:items-center">
              <li>
                <a
                  className="text-[20px] font-medium font-figtree leading-[33px] "
                  href="#"
                >
                  features
                </a>
              </li>
              <li>
                <a
                  className="text-[20px] font-medium font-figtree leading-[33px] "
                  href="#"
                >
                  faqs
                </a>
              </li>
              <button className="h-[69px] w-[200px] font-figtree text-[18px] leading-[33pxx] text-center rounded-[40px] bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
                get early access
              </button>
            </ul>
          </nav>
        </div>
        {/* large screen hero texts */}
        <div>
          <h1 className="hidden md:block md:mx-auto md:mt-[77px] md:text-[64px] md:leading-[70px] text-center md:max-w-[901px] font-Eina01Bold">
            let your fans{" "}
            <span className="bg-clip-text text-transparent text-[43px] leading-[49px] md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              show you love
            </span>{" "}
            for your{" "}
            <span className="bg-clip-text text-transparent text-[43px] leading-[49px] md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              contents
            </span>
          </h1>
        </div>
        {/* small scrreen hero text */}
        <div className="mx-auto mt-[71px]">
          <h1 className="mx-auto md:hidden w-[326px] p-[2px] text-[#fefefe] text-[38px] leading-[43px] font-Eina01Bold lowercase text-center">
            let your fans{" "}
            <span className="bg-clip-text text-transparent text-[38px] leading-[43px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              show you love
            </span>{" "}
            <br />
            for your contents
          </h1>
        </div>
        <div>
          <p className="mx-auto max-w-[384px] mt-[29px] text-[16px] leading-[28px] md:max-w-[700px] text-center md:mt-[41px] md:text-[20px] md:leading-[33px] font-figtree font-normal">
            got a devoted fanbase? <br /> you can quickly create and setup your
            page to let your fans{" "}
            <span className="bg-clip-text text-transparent text-[16px] leading-[28px] bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              show you love
            </span>{" "}
            through donations, membership plans or selling anything you like.
          </p>
        </div>
        {/* form */}
        <Form />
        {/* sliding memojis */}
        <Memoji />
      </div>
      <Features />
      {/* <Faqs/> */}
      <Faqs />
      {/* footer section */}
      <Footer/>
    </div>
  );
};

export default App;
