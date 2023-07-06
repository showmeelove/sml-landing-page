/* eslint-disable react/prop-types */

const Button = (props) => {

  const { children, className, ...prop } = props

  return (
    <button className={`grid place-items-center bg-primary rounded-[100px] h-[60px] w-full ${className}`} {...prop}>{children}</button>
  )
}

export default Button