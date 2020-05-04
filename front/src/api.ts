import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://natours-adventure.herokuapp.com/api/v1',
  timeout: 4000
});

class Request {

  async get<T>(endPoint: string): Promise<T> {
    const res = await instance.get(`/${endPoint}`);
    return res.data.data;
  }

  post<T, O>(endPoint: string, options: O): Promise<T> {
    return instance.post(`/${endPoint}`, options);
  }

  patch<T, D, O>(endPoint: string, data: D, options: O): Promise<T> {
    return instance.patch(`/${endPoint}`, data);
  }

  delete<T, O>(endPoint: string, options: O): Promise<T> {
    return instance.delete(`/${endPoint}`, options);
  }
}

export const request = new Request();