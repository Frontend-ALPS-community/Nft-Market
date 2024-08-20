import { IDecoded } from '@/types/type';
import { create } from 'zustand';

interface StoreState {
  decoded: IDecoded | null;
  setDecoded: (decoded: IDecoded) => void;
  clear: () => void;
}

const useDecodedStore = create<StoreState>((set) => ({
  decoded: null,
  setDecoded: (decoded: IDecoded) => set({ decoded }),
  clear: () => set({ decoded: null }),
}));

export default useDecodedStore;
