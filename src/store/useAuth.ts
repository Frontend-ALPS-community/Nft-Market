// store/authStore.ts
import create from 'zustand';

interface AuthState {
  authState: boolean;
  setAuthState: (loggedIn: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  authState: false,
  setAuthState: (loggedIn: boolean) => set({ authState: loggedIn }),
}));

export default useAuthStore;
