import React from 'react'
import { clx } from '../../components/custom/clx'
import Text from '../../components/custom/Text'
import { BackedData, PartnerData } from '../../constant'

const Partner = () => {
  const classes = clx('w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8')
  return (
    <section className={`${classes}`}>
      <div>
        <Text as='h3' className='text-center'>PARTNERS & BACKERS</Text>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-center'>
        {BackedData.map((slides, index) => (
  <div key={index} className='mt-5 flex justify-center'> 
    <img src={slides.image} alt='' className='object-cover h-24 w-24 mx-auto' /> {/* Add mx-auto to center the image */}
  </div>
))}
        </div>
      </div>
    </section>
  )
}

export default Partner