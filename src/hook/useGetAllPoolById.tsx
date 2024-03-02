import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ServiceInstance } from '../service/AxiosInstance';

const useGetAllPoolById = (poolId:string) => {
  const { data, isFetching, isError, isFetched, isLoading } = useQuery({
    queryKey: ['AllPoolById', poolId],  
    queryFn: async () => {
      try {
        const res = await ServiceInstance.get(`pools/${poolId}`);
        return res.data;
      } catch (error:any) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
  });

  return { data, isFetching, isError, isFetched, isLoading };
};

export default useGetAllPoolById;
