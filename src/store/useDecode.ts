import { IDecoded } from '@/types/type';
import { create } from 'zustand';

interface StoreState {
  decoded: IDecoded;
  setDecoded: (decoded: IDecoded) => void;
  clear: () => void;
}

const useDecodedStore = create<StoreState>((set) => ({
  decoded: { userId: '', username: '', wallet: 0 },
  setDecoded: (decoded: IDecoded) => set({ decoded }),
  clear: () => set({ decoded: { userId: '', username: '', wallet: 0 } }),
}));

export default useDecodedStore;
