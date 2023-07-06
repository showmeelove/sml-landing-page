/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import logo from "../../assets/images/sml.svg";
import Input from "../ui/Input";
import { useState, useReducer } from 'react'
import email_icon from '../../assets/icons/mail.svg'
import Button from "../ui/Button";
import password_icon from '../../assets/icons/password.png'


const authStatusEnum = {
  auth_forgot_password_screen: 'forgot-password-screen',
  auth_otp_screen: 'otp-screen',
  auth_change_password_screen: 'change-password-screen'
}

const ForgotPassword = () => {

  const [authStatus, setAuthStatus] = useState(authStatusEnum.auth_forgot_password_screen)

  const authStatusHandler = (val) => setAuthStatus(val)
  

  return (
    <div className={`bg-white w-full min-h-screen`}>
      <div className={`mx-[100px] pt-[30px] flex flex-col items-center gap-[30px] md:pt-[38px] md:flex md:flex-row md:items-center md:justify-between`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      { authStatus === authStatusEnum.auth_forgot_password_screen && <ForgotPasswordScreen authStatusHandler={authStatusHandler} /> }
      { authStatus === authStatusEnum.auth_otp_screen && <EnterOTPScreen authStatusHandler={authStatusHandler} /> }
      { authStatus === authStatusEnum.auth_change_password_screen && <ChangePasswordScreen authStatusHandler={authStatusHandler} /> }

    </div>
  )
}

export default ForgotPassword


const ForgotPasswordScreen = ({authStatusHandler}) => {

  const [email, setEmail] = useState("")

  const submit = (e) => {
    e.preventDefault()

    authStatusHandler(authStatusEnum.auth_otp_screen)
  }

  return (
    <section className="py-[100px] mx-auto w-full max-w-[520px] font-figtree px-4">
      <header className="pb-8">
        <h1 className='text-[#001534] text-[32px] font-bold text-center'>forgot password</h1>
        <p className='text-[#8F9FB7] pt-2 text-center'>confirm the email address to be correct. we will email you an OTP which you will enter in the next page. it will expire in 5 minutes.</p>
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
        <fieldset>
          <Button>login</Button>
        </fieldset>
        <fieldset className="pl-5 grid place-items-center pt-5">
          <p className='text-[#8F9FB7] font-semibold'>remember your password? <Link to='/signup' className="text-primary">go back to log in</Link></p>
        </fieldset>
      </form>
    </section>
  )
}

const EnterOTPScreen = ({ authStatusHandler }) => {


  const submit = (e) => {
    e.preventDefault()

    authStatusHandler(authStatusEnum.auth_change_password_screen)
  }

  const init = {
    input_1:'',
    input_2:'',
    input_3:'',
    input_4:'',
    input_5:'',
    input_6:'',
  }

  const reducer = (state, action) =>{
    
    switch(action.type){
      case "input_1": {
        return {
          ...state,
          input_1: action.payload
        }
      }
      case "input_2": {
        return {
          ...state,
          input_2: action.payload
        }
      }
      case "input_3": {
        return {
          ...state,
          input_3: action.payload
        }
      }
      case "input_4": {
        return {
          ...state,
          input_4: action.payload
        }
      }
      case "input_5": {
        return {
          ...state,
          input_5: action.payload
        }
      }
      case "input_6": {
        return {
          ...state,
          input_6: action.payload
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, init)

  const otpHandler = (e, k) =>{
    
    if((state[k] > -1 && state[k] < 10) && e.target.value === ''){
      /*
       When an input value is deleted, move current input focus to the previous input element 
      */
      dispatch({type: k, payload: e.target.value})
      e.target?.previousElementSibling?.focus()

    } else if (e.target.value > -1 && e.target.value < 10){
      /*
       When an input value is a valid (0-9), move current input focus to the next input element 
      */
      dispatch({type: k, payload: e.target.value})
      e.target?.nextElementSibling?.focus()

    }
    
  }

  return (
    <section className="py-[100px] mx-auto w-full max-w-max font-figtree px-4">
      <header className="pb-8">
        <h1 className='text-[#001534] text-[32px] font-bold text-center'>enter OTP</h1>
        <p className='text-[#8F9FB7] pt-2 text-center'>We just sent an OTP to demo***********.com. Didn&rsquo;t see it?</p>
        <p className='text-[#8F9FB7] pt-2 text-center'>Check your spam folder.</p>
      </header>
      <form onSubmit={submit} className='pt-[50px] flex flex-col gap-y-14'>
        <fieldset className='flex items-center gap-x-2 md:gap-x-5 max-w-max mx-auto'>
          {
            Object.keys(init).map((k, i) => (
              <input 
                key={i}
                type="number"
                value={state[k]}
                onChange={(e) => otpHandler(e, k)}
                className="sm-otp-input rounded-[6px] md:rounded-[20px] text-[20px] md:text-[32px] w-[40px] h-[50px] md:h-[92px] md:w-[78px]" 
                maxLength={1}  
                placeholder="⚫"
              />
            ))
          }
        </fieldset>
        <fieldset className="grid place-items-center">
          <Button className="max-w-fit px-16">continue</Button>
        </fieldset>
      </form>
    </section>
  )
}

const ChangePasswordScreen = ({authStatusHandler}) => {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const submit = (e) => {
    e.preventDefault()

    authStatusHandler(authStatusEnum.auth_otp_screen)
  }

  return (
    <section className="py-[100px] mx-auto w-full max-w-[520px] font-figtree px-4">
      <header className="pb-8">
        <h1 className='text-[#001534] text-[32px] font-bold text-center'>choose new password</h1>
      </header>
      <form onSubmit={submit} className='pt-10 flex flex-col gap-y-6'>
        <fieldset className='flex items-center'>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leading={password_icon}
            placeholder="Password"
          />
        </fieldset>
        <fieldset className='flex items-center'>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            leading={password_icon}
            placeholder="Confirm password"
          />
        </fieldset>
        <fieldset className='pt-10'>
          <Button>reset password</Button>
        </fieldset>
      </form>
    </section>
  )
}