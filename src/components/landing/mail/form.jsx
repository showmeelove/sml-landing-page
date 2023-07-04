const form = () => {
  const submit = (e) => {
    e.preventDefault;
  };

  return (
    <>
      <div className="mx-auto md:flex md:justify-center md:items-center">
        <form
          className="mx-auto flex flex-col gap-[15px] jusfity-center items-center mt-[51px] md:mt-[40px] md:relative"
          action="#"
        >
          <div className="mx-auto md:relative flex justify-center items-center md:flex md:items-center bg-[#01193C] border-[1px] border-[#61646B] md:max-w-[620px] rounded-[60px] ">
            <span className="md:pl-[44px] pl-[30px] font-figtree text-[20px] leading-[33px] text-[#fefefe]">
              showmeelove.com/
            </span>
            <input
              type="mail"
              name="create page"
              autoComplete="off"
              placeholder="yourname"
              className="mx-auto py-[18px] w-[180px] font-figtree text-[20px] leading-[33px] bg-[#01193C] outline-none rounded-[60px] md:w-[534px] pl-[3px] md:py-[24px] text-[#A3A3A3]"
            />
          </div>
          <button
            onSubmit={submit}
            className="w-[330px] text-[16px] py-[18px] leading-[33px] rounded-[40px] md:absolute md:top-2 md:bottom-2 md:right-[7.8px] text-center outline-none md:px-[37.74px] font-figtree text-[#ffffff] md:text-[20px] md:w-[218px] font-medium md:leading-[25.65px] md:rounded-[35.942px] bg-gradient-to-r from-[#1864FF] to-[#42AAFF] hover:from-[#1864FF] hover:to-[#1864FF]"
          >
            create my page
          </button>
        </form>
      </div>
      <p className="text-[14px] leading-[33px] mt-[10px] font-medium text-center text-[#DEDEDE] font-figtree md:text-[18px] md:mt-[20px] md:leading-[33px]">
        create your page in 2 minutes😍
      </p>
    </>
  );
};

export default form;
