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
      className=" border-[#EEEEEE] border-[2px]  border-solid mb-[23px]  w-[683px] rounded-[13px] bg-[#ffffff] "
      onClick={onToggle}
    >
      <h3
        className={`text-[14px] md:text-[22px] leading-[33px] font-EinasemiBold font-[700] text-[#001534] pl-[30px] pt-[27px] py-[27px]`}
      >
        {faq.title}
      </h3>
      {active ? (
        <p className="text-[10px] md:text-[18px] font-figtree leading-[30px] w-[592px] text-[#A1A1A1] pl-[30px] pb-[23px]">
          {faq.body}
        </p>
      ) : (
        ""
      )}
      <span className="absolute top-0 right-0">{active ? "+" : "-"}</span>
    </div>
  );
};

export default FAQCard;
