// store/userStore.ts
import { create } from 'zustand';

interface UserStore {
  userId: string | null;
  setUserId: (id: string | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userId: null, // 초기 상태는 null
  setUserId: (id) => set({ userId: id }), // userId를 업데이트하는 함수
}));

export default useUserStore;
