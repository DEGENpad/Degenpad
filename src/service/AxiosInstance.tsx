import axios, { AxiosInstance  }from 'axios';

export const ServiceInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8090/api',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
