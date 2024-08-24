import { IDecoded } from '@/types/type';
import { create } from 'zustand';

interface StoreState {
  decoded: IDecoded;
  setDecoded: (decoded: IDecoded) => void;
  clear: () => void;
}

const useDecodedStore = create<StoreState>((set) => ({
  decoded: { userId: '', username: '' },
  setDecoded: (decoded: IDecoded) => set({ decoded }),
  clear: () => set({ decoded: { userId: '', username: '' } }),
}));

export default useDecodedStore;
