import { Axios } from './core';

const PATH = '/cards';

export const CardApi = {
  async getAllCard() {
    const res = await Axios.get(PATH + '/');
    return res.data;
  },
  async getCard(id: string) {
    const res = await Axios.get(`${PATH}/${id}`);
    return res.data;
  },
};
