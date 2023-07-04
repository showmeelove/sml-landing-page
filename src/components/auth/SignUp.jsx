import Auth from './Auth'
import mail_icon from '../../assets/icons/mail.svg'
import password_icon from '../../assets/icons/password.png'
import logout_icon from '../../assets/icons/login.png'
import { Link } from 'react-router-dom';
import google_icon from '../../assets/icons/google.svg'
import facebook_icon from '../../assets/icons/facebook.svg'
import twitter_icon from '../../assets/icons/twitter.svg'
import eye_icon from '../../assets/icons/eye-icon.svg'


const SignIn = () => {


  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <Auth>
      <section className="py-[100px] mx-auto w-full max-w-[500px] font-figtree px-4">
        <header>
          <h1 className='text-[#001534] text-[#001534] text-[32px] font-bold text-center'>create account</h1>
        </header>
        <form onSubmit={submit} className='pt-[50px] flex flex-col gap-y-6'>
          <fieldset className='flex items-center'>
            <div className='rounded-[20px] w-full border-[1px] items-center border-[#EEEEEE] px-5 flex gap-x-5 h-[71px]'>
              <figure className='h-fit'>
                <img src={mail_icon} alt="Mail Icon" />
              </figure>
              <input type="email" className='outline-none text-[#8F9FB7] w-full' placeholder="What's your email?" />
            </div>
          </fieldset>
          <fieldset className='flex items-center gap-x-5'>
            <div className='rounded-[20px] flex-1 border-[1px] border-[#EEEEEE] px-5 flex gap-x-5 h-[71px] items-center'>
              <figure className='h-fit'>
                <img src={password_icon} alt="Mail Icon" />
              </figure>
              <input type="password" className='outline-none text-[#8F9FB7] w-full' placeholder="Password" />
              <figure>
                <img src={eye_icon} alt="Eye Icon" className="h-[40px]" />
              </figure>
            </div>
            <button className="h-[71px] px-5 rounded-[20px] border-[1px] border-[#EEEEEE]">
              <img src={logout_icon} alt="Logout Icon"/>
            </button>
          </fieldset>
          <fieldset className="pl-5">
            <Link to='/forgot-password' className="text-[#001534] font-bold">forgot password?</Link>
          </fieldset>
          <fieldset className="pl-5 grid place-items-center">
            <p className='border-[#eeeeee] border-[1px] rounded-[50px] py-[10px] px-[23px] text-[#8F9FB7]'>or sign up with</p>
          </fieldset>
          <fieldset className="pl-5 grid grid-cols-3 gap-x-5">
            <figure className="bg-[#EEEEEE66] rounded-[20px] py-[15px] grid place-items-center">
              <img src={google_icon} alt="Google Icon"/>
            </figure>
            <figure className="bg-[#EEEEEE66] rounded-[20px] py-[15px] grid place-items-center">
              <img src={facebook_icon} alt="Facebook Icon"/>
            </figure>
            <figure className="bg-[#EEEEEE66] rounded-[20px] py-[15px] grid place-items-center">
              <img src={twitter_icon} alt="Twitter Icon"/>
            </figure>
          </fieldset>
          <fieldset className="pl-5 grid place-items-center pt-5">
            <p className='text-[#8F9FB7] font-semibold'>already have an account? <Link to='/login' className="text-primary">login</Link></p>
          </fieldset>
        </form>
      </section>
    </Auth>
  );
};

export default SignIn;
