import { CardApi } from '@/apis/cardApi';
import {create} from 'zustand';

type Price = { total: number; min: number };

interface StoreState {
  price: Price | null;
  setPrice: () => Promise<void>;
}

const usePriceInfo = create<StoreState>((set) => ({
  price: null,
  setPrice: async () => {
    try {
      const res = await CardApi.getPriceInfo();
      set({ price: res });
    } catch (error) {
      console.error('Failed to fetch price info:', error);
    }
  },
}));

export default usePriceInfo;
