import axios, { AxiosInstance } from 'axios';

const backendURL: string | undefined = process.env.NEXT_PUBLIC_Backend_URL;

export const Axios: AxiosInstance = axios.create({
  baseURL: backendURL,
  withCredentials: true,
});
