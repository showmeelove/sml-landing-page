/* eslint-disable react/prop-types */

const Button = ({children}) => {
  return (
    <button className={`grid place-items-center bg-primary rounded-[100px] h-[60px] w-full`}>{children}</button>
  )
}

export default Button