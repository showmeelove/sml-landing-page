/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const FAQCard = ({ active, onToggle, faq }) => {
  // const handleClick = (id) => {
  // 	console.log(id == idx);
  // 	if (id == idx) setopen(!Open);
  // };
  // const textColor = active ? "text-[#004DB3]" : "text-black";
  return (
    <div
      className="relative border-[#EEEEEE] border-[2px] border-solid mb-3 md:mb-[23px] w-[320px]  md:w-[683px] rounded-[13px] bg-[#ffffff]"
      onClick={onToggle} 
    >
      <h3
        className={`text-[14px] md:text-[22px] leading-[33px] font-EinasemiBold font-[700] text-[#001534] pl-[30px] pt-[27px] py-[27px] `}
      >
        {faq.title}
      </h3>
      {active ? (
        <p className="text-[12px] md:text-[18px] font-figtree leading-[30px] w-[310px] md:w-[592px] text-[#A1A1A1] pl-[30px] pb-[23px]">
          {faq.body}
        </p>
      ) : (
        ""
      )}
      <span className="absolute cursor-pointer text-[18px] font-figtree font-bold text-black  top-2 right-4">{active ? "-" : "+"}</span>
    </div>
  );
};

export default FAQCard;
