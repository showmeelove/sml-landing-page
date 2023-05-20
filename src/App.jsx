
const App = () => {
  return (
    <div className="mx-auto container">
      <div className="gradient"></div>
      <div className="mt-[66.5px] mx-[100px] mxauto flex justify-between items-center">
        <h1 className="text-[#FEFEFE] font-Eina01Bold text-[26px] leading-[30.47px] ">
          showmeelove.
        </h1>
        <nav>
          <ul className="flex justify-between space-x-[43px] items-center">
            <li>
              <a href="#">features</a>
            </li>
            <li>
              <a href="#">faqs</a>
            </li>
            <button className="bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              get early access
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App