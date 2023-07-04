import Auth from './Auth'
import { useState } from "react";

const SignIn = () => {

  return (
    <Auth>
      <section className="mt-[100px] text-black mx-auto text-center">
          <header>
            <h1 className='text-[#001534] text-[32px] font-bold font-figtree'>login</h1>
          </header>
      </section>
    </Auth>
  );
};

export default SignIn;
