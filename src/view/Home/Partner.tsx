import React from 'react'
import { clx } from '../../components/custom/clx';
import Text from '../../components/custom/Text';
import { PartnerData } from '../../constant';

const Partner = () => {
    const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={`${classes}`}>
        <div>
            <Text as='h3' className='text-center'>PARTNERS & BACKERS</Text>
        <div className='grid grid-cils-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {
          PartnerData.map((slides,index)=>(
            <div key={index} className='mt-5'> 
             <div className='border-4 h-10 w-40 border-green-300'/>
            </div>
          ))
        }
        </div>

        </div>
    </section>
  )
}

export default Partner