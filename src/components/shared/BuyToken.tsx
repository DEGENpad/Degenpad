import React from 'react'
import { clx } from '../custom/clx';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';

const BuyToken = () => {
    const classes = clx('');
    return (
      <section className={`bg-white-300 py-10 px-10`}>
        <div>
            <CustomInput
             type='number'
             onchange={()=>{}}
            />
            <CustomButton
              label='Buy'
              onClick={()=>{}}
            />
        </div>

    </section>
  )
}

export default BuyToken