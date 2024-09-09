import { create } from 'zustand';

interface StoreState {
  isButtonClicked: boolean;
  toggleButton: () => void;
}

const useSellModal = create<StoreState>((set) => ({
  isButtonClicked: false,
  toggleButton: () =>
    set((state) => ({ isButtonClicked: !state.isButtonClicked })),
}));

export default useSellModal;
