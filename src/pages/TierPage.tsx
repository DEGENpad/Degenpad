import React from 'react'
import {Board, WhiteListCard} from '../view/Tier'
import Table from '../components/custom/Table'
import { createColumnHelper } from '@tanstack/react-table';
import { User } from '../type';
import useGetAllPool from '../hook/useGetAllPool';
import CustomButton from '../components/custom/CustomButton';
import { useNavigate } from 'react-router-dom';
import Text from '../components/custom/Text';




const TierPage = () => {
  const columnHelper = createColumnHelper<any>();
  const { isLoading, data:AllPools, isError, isFetching, refetch,isSuccess ,error} = useGetAllPool()
  const naviagte = useNavigate()

  const columns= [ 
    columnHelper.accessor("logo", {
        // id: "S.No",
        cell: ({row,column}) => (<img src={row.original.logo} alt='' className='h-10 w-10 rounded-full'/>),
        header: "Projects",
      }),
    columnHelper.accessor("tag", {
        // id: "S.No",
        // cell: (info) => <span>{info.row.index + 1}</span>,
        header: "Tag",
      }),
    columnHelper.accessor("totalRaised", {
        // id: "S.No",
        // cell: ({row,column}) => <span>{row.original.progress}</span>,
        header: "tokenSymbol",
      }),
    columnHelper.accessor("status", {
        // id: "S.No",
        // cell: ({row,column}) => <span>{row.original.progress}</span>,
        header: "status",
      }),
    columnHelper.accessor("dateOfCompletion", {
        // id: "S.No",
        // cell: ({row,column}) => <span>{row.original.progress}</span>,
        header: "Date of Completion",
      }),
    columnHelper.accessor("id", {
        // id: "S.No",
        cell: ({row,column}) => <CustomButton className='bg-blue-200 rounded-md text-white-200 px-5 py-1 cursor-pointer hover:bg-blue-700' label='buy' onClick={()=>naviagte(`${row.original?.id}`)}/>,
        header: "",
      }),
]
  return (
    <section>
      <Text as='p' weight='semibold' className='text-center mt-10 mb-16 lg:text-[16px] text-secondary-dark cursor-pointer hover:underline'>
          List of Projects
        </Text>
    <Table columns={columns}
     isLoading={isLoading}
     data={AllPools ?? []}
    />
    </section>
  )
}

export default TierPage