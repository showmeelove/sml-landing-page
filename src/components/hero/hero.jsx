import { useState } from "react";import Form from "../mail/form";
import Memoji from "../mail/memojis";

const Hero = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navLinks = [
    {
      text: "features",
      href: "#features",
    },
    {
      text: "faqs",
      href: "#faqs",
    },
    {
      text: "login",
      href: "#login",
    },
  ];

  return (
    <div className="mx-auto containr overflow-x-hidden">
      <div className="hero-pattern"></div>
      <div className="gradient"></div>
      <div className="rounded-b-[60px] bg-[#010E2] py-[10px] ">
        <div className="mx-[19px] mt-[30px] md:mt-[10.5px] md:mx-[50px] flex items-center justify-between md:flex md:justify-between md:items-center">
          <a
            href="#"
            className="text-[22px] leading-[25.78px] text-[#FEFEFE] font-Eina01Bold md:text-[26px] md:leading-[30.47px]"
          >
            showmeelove.
          </a>

          <nav className="hidden md:block">
            <ul className={`flex gap-[60px]`}>
              {navLinks.map((navLink) => (
                <li
                  key={navLink.text}
                  className={`font-figtree text-white text-[20px] leading-[33px] font-medium text-center transition-all duration-300 hover:border-b hover:border-[#EEEEEE] hover:text-[#1864FF]`}
                >
                  <a href={navLink.href}>{navLink.text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="hidden md:block px-[42px] py-[20px] font-figtree font-medium text-[18px] leading-[33pxx] text-center rounded-[40px] hover:from-[#1864FF] hover:to-[#1864FF] bg-gradient-to-r from-[#1864FF] to-[#42AAFF] transition-all duration-300">
            sign up
          </button>
          <div className="md:hidden">
            <div className="block md:hidden">
              <button
                className="space-y-1.5"
                onClick={() => setIsOpened(!isOpened)}
              >
                <div
                  className={`transition-all duration-300 bg-white h-0.5 w-6 ${
                    isOpened
                      ? "rotate-45 translate-y-[0.26rem]"
                      : "translate-y-0 rotate-0"
                  }`}
                />
                <div
                  className={`transition-all duration-300 bg-white h-0.5 w-6 ${
                    isOpened ? "hidden" : "block"
                  }`}
                />
                <div
                  className={`transition-all duration-300 bg-white h-0.5 w-6 ${
                    isOpened
                      ? "-rotate-45 -translate-y-[0.24rem]"
                      : "translate-y-0 rotate-0"
                  }`}
                />
              </button>
              {/* nav for mobile screen */}
              <div
                className={`absolute block w-full mt-[35px] bg-white md:hidden z-10 transition-all duration-300 ${
                  isOpened ? " translate-y-0" : "-translate-y-[150%]"
                } pt-4 left-0 right-0`}
              >
                <ul className="mx-auto px-3">
                  <div className="flex flex-col gap-[10px] justify-between items-center mb-[22px]">
                    {navLinks.map((navLink) => (
                      <div
                        key={`${navLink.text}-mobile`}
                        className="group flex items-center gap-1"
                        onClick={()=> setIsOpened(!isOpened)}
                      >
                        <div
                          className={`group-hover:h-9 bg-[#010E21] w-1 rounded-full h-1 transition-all duration-300`}
                        ></div>
                        <li className="py-2 w-full">
                          <a
                            href={navLink.href}
                            className="text-[#001534] font-semibold text-[18px] leading-[33px] font-figtree hover:bg-gradient-to-r from-[#1864FF] to-[#42AAFF] p-3 rounded-lg transition-all duration-300 hover:text-white"
                          > 
                            {navLink.text}
                          </a>
                        </li>
                      </div>
                    ))}
                  </div>
                </ul>
                <a className="mx-auto flex justify-center" href="#get">
                  <button
                    type="button"
                    className={`text-[18px] mb-[34px] hover:bg-[#1864FF] text-clip bg-gradient-to-r from-[#1864FF] to-[#42AAFF] text-white rounded-[24px] leading-[21.94px] font-semibold font-mon text-center px-[42px] py-[18px]`}
                  >
                    sign up
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* large screen hero texts */}
        <div>
          <h1 className="hidden md:mx-1 md:block lg:mx-auto md:mt-[77px] md:text-[64px] md:leading-[70px] text-center md:max-w-[901px] font-Eina01Bold">
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
        <div className="mx-auto md:hidden mt-[71px]">
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
          <p className="mx-auto max-w-[384px] mt-[29px] text-[16px] leading-[28px] md:max-w-[700px] text-center lg:mt-[40px] md:mt-[10px] md:text-[20px] md:leading-[33px] font-figtree font-normal">
            got a devoted fanbase? <br /> you can quickly create and setup your
            page to let your fans{" "}
            <span className="bg-clip-text text-transparent font-semibold leading-[28px] bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              show you love
            </span>{" "}
            through donations, membership plans or selling anything you like.
          </p>
        </div>
        <Form />
        <Memoji />
      </div>
    </div>
  );
};

export default Hero;
