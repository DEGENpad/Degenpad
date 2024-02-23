import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import { clx } from "./clx";
import Text from "./Text";
import { InputProps } from "../../type";


export default function Input({
  type = "text",
  disabled,
  defaultValue,
  errorMessage,
  value,
  onchange,
  onfocus,
  onblur,
  label,
  placeholder,
  inputClass,
  name,
  variant = "primary",
  background,
  borderColor,
  iconLeft,
  iconRight,
  classname,
  children,

}:InputProps) {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const classes = clx("flex flex-col space-y-2 w-full", classname);
  const inputClasses = clx(
    `flex items-center select-none space-x-3 border-${borderColor} rounded-[8px] py-[15px] px-[20px]`,
    variant === "primary" && "bg-[#E6E6E9] dark:bg-[#1B1D26]",
    variant === "secondary" && "bg-secondary-dark",
    variant === "outlined" && "bg-transparent border-[2px]  border-gray-400",
    variant === "white" && "bg-white",
    inputClass
  );
  return (
    <div className={classes}>
      {label && (
        <label htmlFor="">
          <Text as="span" weight="medium" className="text-[15px] lg:text-base">
            {label}
          </Text>
        </label>
      )}
      <div className={inputClasses}>
        {/* Left Icon */}
        <div>{iconLeft}</div>

        <input
          name={name}
          id={name}

          type={type === "password" && isPasswordVisible ? "text" : type}
          defaultValue={defaultValue}
          value={value}
          onChange={onchange}
          onBlur={onblur}
          onFocus={onfocus}
          placeholder={placeholder}
          className={` flex-1 font-gantari font-[500] outline-none placeholder:text-[14px] lg:placeholder:text-base bg-transparent ${variant === "secondary" && "placeholder-white"
            } dark:text-[#e6e6e9]`}
          disabled={disabled}
        />
        {/* Right Icon */}
        {type === "password" ? (
          isPasswordVisible ? (
            <AiOutlineEye
              className="text-[#9799A5] hover:text-[#8280A5] text-[20px] cursor-pointer"
              onClick={() => setPasswordVisible((state) => !state)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="text-[#9799A5] hover:text-[#8280A5] text-[20px] cursor-pointer"
              onClick={() => setPasswordVisible((state) => !state)}
            />
          )
        ) : (
          <div>{iconRight}</div>
        )}
      </div>
      {/* Error Message */}
      {errorMessage && (
        <Text
          as="span"
          weight="medium"
          className="text-[15px] lg:text-base text-red-600"
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
}
