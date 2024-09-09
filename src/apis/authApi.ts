import { IDecoded } from '@/types/type';
import { Axios } from './core';

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}
interface LoginPayload {
  email: string;
  password: string;
}

interface StatusResponse {
  loggedIn: boolean;
  decoded: IDecoded;
}

const PATH = '/auth';
export const authApi = {
  async register({ username, email, password }: RegisterPayload) {
    const res = await Axios.post(PATH + '/register', {
      username,
      email,
      password,
    });
    return res.data;
  },

  async login({ email, password }: LoginPayload) {
    const res = await Axios.post(PATH + '/login', { email, password });
    return res;
  },

  async logout() {
    const res = await Axios.post(PATH + '/logout');
    return res.data;
  },

  async status(): Promise<StatusResponse> {
    const res = await Axios.get(PATH + '/status');
    return res.data;
  },
  async refreshToken() {
    const res = await Axios.post(PATH + '/refreshAccessToken');
    return res;
  },
  async offers(userId: string) {
    try {
      const res = await Axios.post(PATH + '/offers', { userId }); // POST 요청으로 변경하고 userId를 포함
      return res.data;
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  },
};
