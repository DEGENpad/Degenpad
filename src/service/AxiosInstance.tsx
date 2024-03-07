import axios, { AxiosInstance  }from 'axios';

export const ServiceInstance: AxiosInstance = axios.create({
  baseURL: 'https://dyleum-api-data.vercel.app/api',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
