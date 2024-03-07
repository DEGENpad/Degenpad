import React from 'react'
import { useParams } from 'react-router-dom'
import { Board, WhiteListCard } from '../view/Tier'
import useGetAllPoolById from '../hook/useGetAllPoolById'
import Dashboard from '../view/Tier/Dashboard'
import Empty from './../images/empty.svg'
import Loading from './../images/mark.gif'
import Text from '../components/custom/Text'


const SingleTier = () => {
    const {id} = useParams()
    const { data:singleTier, isFetching, isError, isFetched, isLoading } = useGetAllPoolById(id!)


    // console.log(singleTier)
    if(isLoading){
      return (
        <div className='h-screen w-ful flex justify-center items-center'>
          <img src={Loading} alt='' className='w-56 h-55 object-cover '/>
        </div>
      )
     }
     if (singleTier?.length === 0) {
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


    const DashboardDetails = singleTier[0]
    console.log(DashboardDetails)


  return (
    <div>
        
        SingleTier{id}
     <Board/>
    <WhiteListCard  singleTier={singleTier}/>    
    </div>
  )
}

export default SingleTier