import logo from "../../assets/images/sml.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={`bg-white w-full h-screen`}>
      <div className={`mx-[100px] pt-[59px] flex items-center justify-between`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="rounded-[1000px] gap-[47px] flex border-[#eee] md:p-1 border-solid border-[2px] ">
          <motion.button
            animate={{ x: isLogin ? 0 : 7 }}
            onClick={() => setIsLogin(false)}
            className={`font-figtree font-medium text-[#888] ${
              isLogin || "bg-[#216AFF] text-[white]"
            } outline-none rounded-[35.9px]  md:px-[38px] md:py-[21px] md:text-[16px] md:leading-[30px]`}
          >
            create account
          </motion.button>
          <motion.button
            animate={{ x: isLogin ? 0 : -10 }}
            onClick={() => setIsLogin(true)}
            className={`font-figtree font-medium text-[#888] ${
              !isLogin || "bg-[#216AFF] text-[white]"
            } outline-none rounded-[35.9px] md:px-[38px] md:py-[21px] md:text-[16px] md:leading-[30px]`}
          >
            login
          </motion.button>
        </div>
      </div>

      {isLogin ? (
        <div className="mt-[100px] text-black mx-auto text-center">login</div>
      ) : (
        <div className="mt-[100px] text-black mx-auto text-center">
          create account
        </div>
      )}
    </div>
  );
};

export default SignIn;
