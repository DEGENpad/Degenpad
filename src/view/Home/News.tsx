import React from 'react'
import { clx } from '../../components/custom/clx';
import Text from '../../components/custom/Text';
import CustomSlider from '../../components/shared/CustomSlider';
import { NewsData } from '../../constant';

const News = () => {
    const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <section className={`${classes} mt-5`}>
        <Text as='h3' className='font-bold text-xl text-center'>NEWS & HIGHLIGHT</Text>
        <CustomSlider show={3}>
        {
          NewsData.map((slides,index)=>(
            <div key={index}> 
              <img src={slides.image} alt='' className='h-60 w-60'/>
            </div>
          ))
        }
        </CustomSlider>
    </section>
  )
}

export default News