import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ServiceInstance } from '../service/AxiosInstance';



const useGetPool = (path?:string) => {
 const { isLoading, data, isError, isFetching, refetch, error, isSuccess } = useQuery<any[]>({
    queryKey: [path ?? 'anypool'],
    queryFn: async () => {
      const response = await ServiceInstance.get<any[]>(`pools/${path}`);
      return response.data; 
    },
 });

 return { isLoading, data, isError, isFetching, refetch, isSuccess, error };
};

export default useGetPool;
