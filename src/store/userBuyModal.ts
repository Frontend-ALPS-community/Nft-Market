import { create } from 'zustand';

interface StoreState {
  isButtonClicked: boolean;
  toggleButton: () => void;
}

const useBuyModal = create<StoreState>((set) => ({
  isButtonClicked: false,
  toggleButton: () =>
    set((state) => ({ isButtonClicked: !state.isButtonClicked })),
}));

export default useBuyModal;
