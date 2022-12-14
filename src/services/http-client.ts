import axios, { AxiosError, AxiosResponse } from 'axios';

export const BASE_URL = __DEV__ ? 'http://192.168.0.102:3030' : 'http://192.168.0.102:3030';

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

export const httpGET = async <T>(url: string, token?: string): Promise<T> =>
  (await httpClient.get<T>(url, { headers: { authorization: `Bearer ${token}` } })).data;

export const httpPOST = async <Req, Res = Req>(
  url: string,
  data: Req,
  token?: string,
): Promise<Res> =>
  (await httpClient.post<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;

export const httpPUT = async <Req, Res = Req>(
  url: string,
  data: Req,
  token?: string,
): Promise<Res> =>
  (await httpClient.put<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;

export const httpPATCH = async <Req, Res = Req>(
  url: string,
  token?: string,
  data?: Req,
): Promise<Res> =>
  (await httpClient.patch<Res>(url, data, { headers: { authorization: `Bearer ${token}` } })).data;
