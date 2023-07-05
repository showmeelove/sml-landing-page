/* eslint-disable react/prop-types */
import eye_icon from '../../assets/icons/eye-icon.svg'
import { useEffect, useRef, useState } from 'react'

const Input = (props) => {

    const { type, leading, placeholder, value, ...prop } = props

    const [focus, setFocus] = useState(false)

    const labelRef = useRef()
    const inputRef = useRef()

    useEffect(() => {
        const label = labelRef.current
        const input = inputRef.current

        label.addEventListener("click", () => {
            setFocus(true)
            input.focus()
        })

        input.addEventListener("focusout", () => {

            if (value) {
                setFocus(true)
            } else {
                setFocus(false)
            }
            
        })

        input.addEventListener("focus", () => {
            setFocus(true)
        })

    }, [value])

    if (type === "password") {
        return (
            <div className='rounded-[20px] flex-1 border-[1px] border-[#EEEEEE] px-5 flex gap-x-5 h-[71px] items-center'>
                <figure className='h-fit'>
                    <img src={leading} alt="Icon" />
                </figure>
                <div className="relative w-full">
                    <label
                        ref={labelRef}
                        className={`top-0 left-0 text-[#8F9FB7] absolute ${focus ? "sm-auth-placeholder active" : "sm-auth-placeholder"}`}>
                        {placeholder}
                    </label>
                    <input
                        type={type}
                        ref={inputRef}
                        value={value}
                        className={`outline-none text-[#8F9FB7] w-full ${focus ? "sm-auth-input active" : "sm-auth-placeholder"}`}
                        {...prop}
                    />
                </div>
                <figure>
                    <img src={eye_icon} alt="Eye Icon" className="h-[40px]" />
                </figure>
            </div>
        )
    }

    return (
        <div className='rounded-[20px] w-full border-[1px] items-center border-[#EEEEEE] px-5 flex gap-x-5 h-[71px]'>
            <figure className='h-fit'>
                <img src={leading} alt="Icon" />
            </figure>
            <div className="relative w-full">
                <label
                    ref={labelRef}
                    className={`top-0 left-0 text-[#8F9FB7] absolute ${focus ? "sm-auth-placeholder active" : "sm-auth-placeholder"}`}>
                    {placeholder}
                </label>
                <input
                    type={type}
                    ref={inputRef}
                    value={value}
                    className={`outline-none text-[#8F9FB7] w-full ${focus ? "sm-auth-input active" : "sm-auth-placeholder"}`}
                    {...prop}
                />
            </div>
        </div>
    )

}

export default Input