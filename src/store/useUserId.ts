import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserIdState {
  userId: string | null;
  setUserId: (id: string | null) => void;
}

const useUserIdStore = create(
  persist<UserIdState>(
    (set) => ({
      userId: null,
      setUserId: (id: string | null) => set({ userId: id }),
    }),
    {
      name: 'user-id-storage', // localStorage에 저장될 키
      getStorage: () => localStorage, // localStorage를 사용하여 상태 유지
    }
  )
);

export default useUserIdStore;
