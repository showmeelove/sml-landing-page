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
      <div className={`mx-[100px] pt-[59px] flex items-center justify-between`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="rounded-[1000px] gap-[47px] flex border-[#eee] md:p-1 border-solid border-[2px] ">
          <motion.button
            animate={{ x: path === '/signup' ? 0 : 7 }}
            onClick={() => navigate('/signup')}
            className={`font-figtree font-medium text-[#888] ${
              path !== '/signup' || "bg-[#216AFF] text-[white]"
            } outline-none rounded-[35.9px]  md:px-[38px] md:py-[21px] md:text-[16px] md:leading-[30px]`}
          >
            create account
          </motion.button>
          <motion.button
            animate={{ x: path === '/login' ? 0 : -10 }}
            onClick={() => navigate('/login') }
            className={`font-figtree font-medium text-[#888] ${
              path !== '/login' || "bg-[#216AFF] text-[white]"
            } outline-none rounded-[35.9px] md:px-[38px] md:py-[21px] md:text-[16px] md:leading-[30px]`}
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
