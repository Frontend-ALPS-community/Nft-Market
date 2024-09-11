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

export interface IAcceptOfferBody {
  username: string;
  offerId: string | undefined;
}

const PATH = '/cards';

export const CardApi = {
  async getAllCard(sort?: string, colors?: string[]) {
    const colorParam =
      colors && colors.length > 0 ? `&colors=${colors.join(',')}` : '';
    const url = sort
      ? `${PATH}/?sort=${sort}${colorParam}`
      : `${PATH}/?${colorParam}`; // sort가 있으면 쿼리스트링 추가
    const res = await Axios.get(url);
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

  async sellStart(id: string, price: number) {
    const res = await Axios.post(`${PATH}/${id}/sellSetting`, { price });
    return res.data;
  },

  async acceptOffer(id: string, obj: IAcceptOfferBody) {
    const res = await Axios.post(`${PATH}/${id}/acceptOffer`, obj);
    return res.data;
  },
};
