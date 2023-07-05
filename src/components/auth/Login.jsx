import Auth from './Auth'
import { useState } from 'react'
import email_icon from '../../assets/icons/mail.svg'
import password_icon from '../../assets/icons/password.png'
import logout_icon from '../../assets/icons/login.png'
import { Link } from 'react-router-dom';
import google_icon from '../../assets/icons/google.svg'
import facebook_icon from '../../assets/icons/facebook.svg'
import twitter_icon from '../../assets/icons/twitter.svg'
import Input from '../ui/Input';
import Button from '../ui/Button'

const SignIn = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <Auth>
      <section className="py-[100px] mx-auto w-full max-w-[500px] font-figtree px-4">
        <header>
          <h1 className='text-[#001534] text-[#001534] text-[32px] font-bold text-center'>welcome back</h1>
        </header>
        <form onSubmit={submit} className='pt-[50px] flex flex-col gap-y-6'>
          <fieldset className='flex items-center'>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leading={email_icon}
              placeholder="Email address"
            />
          </fieldset>
          <fieldset className='flex items-center gap-x-3'>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leading={password_icon}
              placeholder="Password"
            />
            <button className="h-[71px] px-5 rounded-[20px] border-[1px] border-[#EEEEEE] hidden sm:block">
              <img src={logout_icon} alt="Logout Icon" />
            </button>
          </fieldset>
          <fieldset className="sm:hidden">
            <Button>login</Button>
          </fieldset>
          <fieldset className="pl-5 flex justify-end">
            <Link to='/forgot-password' className="text-[#001534] font-bold">forgot password?</Link>
          </fieldset>
          <fieldset className="pl-5 grid place-items-center">
            <p className='border-[#eeeeee] border-[1px] rounded-[50px] py-[10px] px-[23px] text-[#8F9FB7]'>or login with</p>
          </fieldset>
          <fieldset className="pl-5 grid grid-cols-3 gap-x-5">
            <figure className="bg-[#EEEEEE66] rounded-[20px] py-[15px] grid place-items-center">
              <img src={google_icon} alt="Google Icon" />
            </figure>
            <figure className="bg-[#EEEEEE66] rounded-[20px] py-[15px] grid place-items-center">
              <img src={facebook_icon} alt="Facebook Icon" />
            </figure>
            <figure className="bg-[#EEEEEE66] rounded-[20px] py-[15px] grid place-items-center">
              <img src={twitter_icon} alt="Twitter Icon" />
            </figure>
          </fieldset>
          <fieldset className="pl-5 grid place-items-center pt-5">
            <p className='text-[#8F9FB7] font-semibold'>don&rsquo;t have an account? <Link to='/signup' className="text-primary">create account</Link></p>
          </fieldset>
        </form>
      </section>
    </Auth>
  );
};

export default SignIn;
