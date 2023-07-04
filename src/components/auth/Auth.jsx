/* eslint-disable react/prop-types */
import logo from "../../assets/images/sml.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = ({children}) => {

    const location = useLocation()
    const navigate = useNavigate()
    const path = location.pathname

  return (
    <div className={`bg-white w-full min-h-screen`}>
      <div className={`mx-[100px] pt-[30px] flex flex-col items-center gap-[30px] md:pt-[38px] md:flex md:flex-row md:items-center md:justify-between`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="rounded-[1000px] gap-[67px] w-[356px] md:w-[360px] md:gap-[47px] flex items-center border-[#eee] p-1 border-solid border-[2px] ">
          <motion.button
            animate={{ x: path === '/signup' ? 0 : 7 }}
            onClick={() => navigate('/signup')}
            className={`font-figtree font-medium text-[16px] leading-[30px] text-[#888] ${
              path !== '/signup' || "bg-[#216AFF] text-[white]"
            } outline-none rounded-[35.9px] px-[18px] py-[16px] md:px-[38px] md:py-[20px]`}
          >
            create account
          </motion.button>
          <motion.button
            animate={{ x: path === '/login' ? 1 : -7 }}
            onClick={() => navigate('/login') }
            className={`font-figtree font-medium text-[16px] leading-[30px] text-[#888] ${
              path !== '/login' || "bg-[#216AFF] text-[white]"
            } outline-none rounded-[35.9px] px-[48px] py-[16px] md:px-[40px] md:py-[20px]`}
          >
            login
          </motion.button>
        </div>
      </div>

        { children }
    </div>
  );
};

export default SignIn;
