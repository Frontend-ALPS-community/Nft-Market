import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStatus {
  userId: string | null;
  username: string | null;
  setUserId: (id: string | null) => void;
  setUsername: (name: string | null) => void;
}

const useStatusStore = create(
  persist<UserStatus>(
    (set) => ({
      userId: null,
      username: null, // 초기 상태를 null로 설정
      setUserId: (id: string | null) => set({ userId: id }),
      setUsername: (name: string | null) => set({ username: name }),
    }),
    {
      name: 'user-storage', // localStorage에 저장될 키 이름을 변경
      getStorage: () => localStorage, // localStorage를 사용하여 상태 유지
    }
  )
);

export default useStatusStore;
