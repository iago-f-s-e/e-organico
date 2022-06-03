import { BASE_URL } from '@src/constants/endpoints';
import axios, { AxiosError, AxiosResponse } from 'axios';

function responseSuccessInterceptor(response: AxiosResponse) {
  return response;
}

function responseErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

const _instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 60 * 1000,
});

_instance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export const httpClient = _instance;

export const httpClientGET = async <T>(url: string): Promise<T> =>
  (await httpClient.get<T>(url)).data;
