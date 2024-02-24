import React from 'react'
import Text from '../../components/custom/Text'
import CustomSlider from '../../components/shared/CustomSlider'
import { chainData } from '../../constant'


const SupportChain = () => {
  return (
    <section className='bg-light-200 w-full mt-10 flex flex-col justify-center pt-5  pb-10'>
      <Text as='h2' className='text-center font-bold text-2xl my-8'>Supported Chains</Text>
      <CustomSlider show={7} >
        {
          chainData.map((slides,index)=>(
            <div key={index}> 
              <img src={slides.image} alt='' className='h-24 w-24'/>
            </div>
          ))
        }
      </CustomSlider>
    </section>
  )
}

export default SupportChain