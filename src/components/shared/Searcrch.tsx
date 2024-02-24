import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import Input from '../custom/Input';

const Searcrch = () => {
  return (
    <div className=" w-full mt-2 sm-0">
                <Input
                type='text'
                  classname="w-full"
                  iconLeft={
                    <RiSearch2Line className="w-6 h-6 text-gray-400 " />
                  }
                  placeholder="Search for project"
                  onchange={()=>{}}
                />
              </div>
  )
}

export default Searcrch