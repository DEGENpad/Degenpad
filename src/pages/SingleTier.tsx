import React from 'react'
import { useParams } from 'react-router-dom'
import { Board, WhiteListCard } from '../view/Tier'
import useGetAllPoolById from '../hook/useGetAllPoolById'

const SingleTier = () => {
    const {id} = useParams()
    const { data:singleTier, isFetching, isError, isFetched, isLoading } = useGetAllPoolById(id!)
    console.log(singleTier)

  return (
    <div>
        
        {/* SingleTier{id} */}
        {id}
     <Board/>
    <WhiteListCard  singleTier={singleTier}/>    
    </div>
  )
}

export default SingleTier