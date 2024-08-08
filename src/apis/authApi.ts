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
};
