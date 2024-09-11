import { create } from 'zustand';

interface StoreState {
  isButtonClicked: boolean;
  sortValue: string; // 정렬 기준 상태
  toggleButton: () => void;
  setSortValue: (value: string) => void; // 정렬 기준 업데이트 함수
}

const useUtilBar = create<StoreState>((set) => ({
  isButtonClicked: false,
  sortValue: '', // 기본값으로 빈 문자열
  toggleButton: () =>
    set((state) => ({ isButtonClicked: !state.isButtonClicked })),
  setSortValue: (value: string) => set({ sortValue: value }),
}));

export default useUtilBar;
