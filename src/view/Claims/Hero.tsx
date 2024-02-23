import React from 'react'
import { clx } from '../../components/custom/clx';

const Hero = () => {
    const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={`${classes}`}>
         <div className='rounded-[12px] bg-light-100 px-5 border border-5 border-white-400  mt-10 text-normal-100 font-bold py-5'></div>
        <div className='h-80 w-full bg-normal-300 mt-5'></div>
    </section>
  )
}

export default Hero