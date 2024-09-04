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
    return res.data;
  },

  async logout() {
    const res = await Axios.post(PATH + '/logout');
    return res.data;
  },

  async status() {
    const res = await Axios.get(PATH + '/status', { withCredentials: true });
    return res.data;
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
