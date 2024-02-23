import React from 'react'
import { clx } from '../../components/custom/clx';
import InvestorCard from '../../components/shared/InvestorCard';
import { AthData, InvestorData } from '../../constant';

const Investor = () => {
    const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={`${classes} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
        <InvestorCard label='TOP ATH' board={AthData}/>
        <InvestorCard label='TOP INVESTORS' board={InvestorData}/>
        <InvestorCard label='TOP REFERRES'board={InvestorData}/>
    </section>
  )
}

export default Investor