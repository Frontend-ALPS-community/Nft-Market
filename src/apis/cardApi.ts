import { Axios } from './core';

export interface IOfferBodyObj {
  price: number;
  expiryDate: Date;
  proposer: string;
  lowerLimitPrice: number;
  userId: string;
}

export interface IFavoriteBody {
  username: string;
  userId: string;
}

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
  async createOffer(id: string, obj: IOfferBodyObj) {
    const res = await Axios.post(`${PATH}/${id}/offers`, obj);
    return res.data;
  },
  async getPriceInfo() {
    const res = await Axios.get(`${PATH}/priceInfo`);
    return res.data;
  },
  async updateFavorite(id: string, obj: IFavoriteBody) {
    const res = await Axios.post(`${PATH}/${id}/favorites`, obj);
    return res.data;
  },

  async purchaseCard(id: string, userId: string) {
    const res = await Axios.post(`${PATH}/${id}/purchaseCard`, { userId });
    return res.data;
  },
};
