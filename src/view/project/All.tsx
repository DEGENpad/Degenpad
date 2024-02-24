import React from 'react'
import ParticipateCard from '../../components/shared/ParticipateCard'
import Text from '../../components/custom/Text'
import { useNavigate } from 'react-router-dom'

const All = ({more=false}:{more?:boolean}) => {
   const naviagte=useNavigate()
  return (
    <div className='mt-10 text-center'>

    <section className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      <ParticipateCard onclick={()=>naviagte('/tier')}/>
      <ParticipateCard  onclick={()=>naviagte('/tier')}/>
      <ParticipateCard  onclick={()=>naviagte('/tier')}/>
      <ParticipateCard  onclick={()=>naviagte('/tier')}/>
    </section>
    { more && <Text href='/allproject' as='h3' className='border-3 border-normal-100 mx-auto cursor-pointer border w-fit mt-10 px-3 py-1 rounded-md' >See more</Text>}
    </div>
  )
}

export default All