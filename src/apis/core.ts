import axios, { AxiosInstance } from 'axios';
import { authApi } from './authApi';

const backendURL: string | undefined = process.env.NEXT_PUBLIC_Backend_URL;

export const Axios: AxiosInstance = axios.create({
  baseURL: backendURL,
  withCredentials: true,
});

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await authApi.refreshToken();
        Axios.defaults.headers.common['Authorization'] =
          `Bearer ${data.accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
        return Axios(originalRequest);
      } catch (err) {
        console.error('Refresh token failed:', err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);
