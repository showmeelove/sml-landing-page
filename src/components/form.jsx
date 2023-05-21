
const form = () => {
  return (
    <>
      <div className="mx-auto flex justify-center items-center">
        <form className="mx-auto mt-[68px]" action="#" onSubmit={`text/${{}}`}>
          <div className="flex items-center frelative">
            {/* <span className="absolute left-10">showmeelove.com/</span>  */}
            <input
              type="mail"
              name="username"
              value={`meet the boss/`}
              placeholder="yourname"
              className="mx-auto bg-[#01193C]  right-0 border-[1px] border-[#61646B] rounded-[60px] pl-[44px] w-[634px] py-[32px] text-[#FFFFFF] "
            />
          </div>
        </form>
      </div>
      <p className="text-[18px] mt-[20px] font-figtree leading-[33px] font-medium text-center ">
        create your page in 2 minutes😍
      </p>
    </>
  );
};

export default form;
