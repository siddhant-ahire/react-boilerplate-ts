import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (): void => set({ isAuthenticated: true }),
  logout: (): void => set({ isAuthenticated: false }),
}));

export default useAuthStore;
