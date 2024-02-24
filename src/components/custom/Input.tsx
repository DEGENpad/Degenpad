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
  background,
  borderColor,
  iconLeft,
  iconRight,
  classname,
  children,
}: InputProps) {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const classes = clx("flex flex-col space-y-2 w-full", classname);
  const inputClasses = clx(
    `flex items-center select-none space-x-3 border-${borderColor} ${borderColor && 'border'} rounded-[8px] py-[15px] px-[20px]`,
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log({target:e.target});
            console.log({currentTarget:e.currentTarget});
            console.log({timeStamp:e.timeStamp});
            console.log({type:e.type});
            console.log(e);

            onchange && onchange(e.target.value);
          }}
          onBlur={onblur}
          onFocus={onfocus}
          placeholder={placeholder}
          className={` flex-1 font-poppins font-[500]  outline-none placeholder:text-[14px] lg:placeholder:text-base bg-transparent  dark:text-black`}
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
