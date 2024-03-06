import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ServiceInstance } from '../service/AxiosInstance';


interface PoolData {
 id: number;
 name: string;

}

const useGetCompletedPool = () => {
 const { isLoading, data, isError, isFetching, refetch, error, isSuccess } = useQuery<any[]>({
    queryKey: ['pool_complete'],
    queryFn: async () => {
      const response = await ServiceInstance.get<any[]>('pools/completed');
      return response.data; 
    },
 });

 return { isLoading, data, isError, isFetching, refetch, isSuccess, error };
};

export default useGetCompletedPool;
