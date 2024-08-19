import { create } from 'zustand';

interface StoreState {
  isButtonClicked: boolean;
  toggleButton: () => void;
}

const useModal = create<StoreState>((set) => ({
  isButtonClicked: false,
  toggleButton: () =>
    set((state) => ({ isButtonClicked: !state.isButtonClicked })),
}));

export default useModal;
