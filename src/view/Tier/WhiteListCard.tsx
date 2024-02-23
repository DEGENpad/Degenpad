import React from 'react'
import { clx } from '../../components/custom/clx';
import ParticipateCard from '../../components/shared/ParticipateCard';

const WhiteListCard = () => {
    const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
    return (
      <section className={classes}>
        <div className='flex flex-col md:flex-row justify-between items-center gap-9'>
        <ParticipateCard label='connect wallet'/>
        <ParticipateCard label='connect wallet'/>
        </div>
        </section>
  )
}

export default WhiteListCard