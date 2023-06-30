import memo from "./assets/images/errror.svg" ;

const Error = () => {
  return (
    <div>
      <div className="flex flex-col gap-7 justify-center items-center w-full h-screen">
        <h1 className="text-[40px] leading-[25.78px] text-transparent h-12  bg-clip-text bg-gradient-to-r from-[#1864FF] to-[#42AAFF] font-Eina01Bold md:text-[40px] md:leading-[30.47px]">
          showmeelove.
        </h1>
        <img src={memo} alt="face icon" className="w-20" />

        <h1 className="text-[#FEFEFE] mx-4 text-center font-Eina01Bold">ERROR 404! <br /> Page not found chief!</h1>
        <a className="text-[#FEFEFE] font-figtree p-2 outline-dashed outline-[#1864FF]" href="/">Go to Home</a>
      </div>
    </div>
  );
};

export default Error;
