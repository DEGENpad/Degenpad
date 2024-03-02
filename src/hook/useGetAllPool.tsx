import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ServiceInstance } from '../service/AxiosInstance';


interface PoolData {
 id: number;
 name: string;

}

const useGetAllPool = () => {
 const { isLoading, data, isError, isFetching, refetch, error, isSuccess } = useQuery<any[]>({
    queryKey: ['pool'],
    queryFn: async () => {
      const response = await ServiceInstance.get<any[]>('pools');
      return response.data; 
    },
 });

 return { isLoading, data, isError, isFetching, refetch, isSuccess, error };
};

export default useGetAllPool;
