import React from 'react'
import Coming from '../../components/shared/Coming'
import ParticipateCard from '../../components/shared/ParticipateCard'
import Text from '../../components/custom/Text'
import Loading from './../../images/mark.gif'
import { useNavigate } from 'react-router-dom'
import useGetCompletedPool from '../../hook/useGetCompletedPool'
import Empty from './../../images/empty.svg'



const Ended = ({more=false,schedule}:{more?:boolean,schedule?:string}) => {
  const naviagte=useNavigate()
  const { isLoading, data:AllPools, isError, isFetching, refetch,isSuccess ,error} = useGetCompletedPool()
  // const { data:completed,isLoading:completedLoading} = useGetCompletedPool()
  //  console.log(completed)
   if(isLoading){
    return (
      <div className='h-screen w-ful flex justify-center items-center'>
        <img src={Loading} alt='' className='w-56 h-55 object-cover '/>
      </div>
    )
   }
   if (AllPools?.length === 0) {
    return (
      <div
        className={`w-full min-h-[350px] bg-gradient-to-br from-white to-gray-100 flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="w-[200px] lg:w-[250px] h-[200px] lg:h-[250px]">
            <img
              src={Empty}
              alt="No Data found"
              className="w-full h-full object-contain"
            />
          </div>
          <Text
            weight="semibold"
            as="h2"
            className="text-primary-dark leading-loose"
          >
            No Data Found
          </Text>
          {/* <img
          src="/assets/icons/loader2.svg"
          alt="loading..."
          className="w-full h-full object-fill"
        /> */}
        </div>
      </div>
    );
  }

  //  console.log(AllPools)
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


export default Ended