import React from 'react'
import { clx } from '../../components/custom/clx';
import CustomButton from '../../components/custom/CustomButton';

const Hero = () => {
    const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={`${classes}`}>
       <div className='w-full text-center'>
      <h3>Claim your Purchase Token</h3>
    <CustomButton
        label='claim'
        onClick={()=>{}}
        className='border bg-normal-300 mt-5 px-24 rounded-full py-2 text-white-100 hover:bg-blue-500'
    />

       </div>
    </section>
  )
}

export default Hero


{/* <div className='rounded-[12px] bg-light-100 px-5 border border-5 border-white-400  mt-10 text-normal-100 font-bold py-5'></div>
<div className='h-80 w-full bg-normal-300 mt-5'></div> */}