import React, { useEffect } from 'react'
import ParticipateCard from '../../components/shared/ParticipateCard'
import Text from '../../components/custom/Text'
import { useNavigate } from 'react-router-dom'
import useGetAllPool from '../../hook/useGetAllPool'
import Loading from './../../images/mark.gif'


const All = ({more=false,schedule}:{more?:boolean,schedule?:string}) => {
   const naviagte=useNavigate()
   const { isLoading, data:AllPools, isError, isFetching, refetch,isSuccess ,error} = useGetAllPool()
   if(isLoading){
    return (
      <div className='h-screen w-ful flex justify-center items-center'>
        <img src={Loading} alt='' className='w-full '/>
      </div>
    )
   }

   console.log(AllPools)
  return (
    <div className='mt-10 text-center'>

    <section className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        AllPools?.map((pool,index)=>(
          <ParticipateCard onclick={()=>naviagte(`/tier/${pool?.id}`)} allPool={pool}  key={index}/>
        ))
      }
    </section>
    { more && <Text href='/allproject' as='h3' className='border-3 border-normal-100 mx-auto cursor-pointer border w-fit mt-10 px-3 py-1 rounded-md' >See more</Text>}
    </div>
  )
}

export default All