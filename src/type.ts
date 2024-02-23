import React, { ReactNode } from "react";

export interface VoidProps {
    handleToggle:()=>void
}
export interface InputProps{
    type:string,
    disabled?:boolean,
  defaultValue?:string,
  errorMessage?:string,
  value?:string,
  onchange:()=>void,
  onfocus?:()=>void,
  onblur?:()=>void,
  label?:string,
  placeholder?:string,
  inputClass?:string,
  name?:string,
  variant ?:string,
  background?:string,
  borderColor?:string,
  iconLeft?:React.ReactNode,
  iconRight?:React.ReactNode,
  classname?:string,
  children?:React.ReactNode,
}
export interface DataProps {
    id:number,
    label?:string,
    details?:string,
    image?:string,
    amt?:number

}

export interface FooterData {
    id:number,
    title:string,
    content:string[]
}
