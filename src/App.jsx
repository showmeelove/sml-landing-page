import Form from "./components/form";

const App = () => {
  return (
    <div className="mx-auto">
      <div className="hero-pattern"></div>
      <div className="gradient"></div>
      <div className="mt-[50.5px] mx-[100px] m-auto flex justify-between items-center">
        <h1 className="text-[#FEFEFE] font-Eina01Bold text-[26px] leading-[30.47px] ">
          showmeelove.
        </h1>
        <nav>
          <ul className="flex justify-between space-x-[43px] items-center">
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
      <div>
        <h3 className="mx-auto mt-[77px] text-[64px] leading-[70px] text-center max-w-[901px] font-Eina01Bold  ">
          let your fans{" "}
          <span className="bg-clip-text text-transparent text-[43px] leading-[49px] md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
            show you love
          </span>{" "}
          for your{" "}
          <span className="bg-clip-text text-transparent text-[43px] leading-[49px] md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
            contents
          </span>
        </h3>
      </div>
      <div>
        <p className="mx-auto max-w-[700px] text-center mt-[41px] text-[20px] leading-[33px] font-figtree ">
          got a devoted fanbase? <br /> you can quickly create and setup your
          page to let your fans{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
            show you love
          </span>{" "}
          through donations, membership plans or selling anything you like.
        </p>
      </div>
      {/* form */}
      <Form />
    </div>
  );
};

export default App;
