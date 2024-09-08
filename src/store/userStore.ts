import { create } from 'zustand';

interface UserState {
  user: {
    user_id: number;
    user_name: string;
    user_email: string;
    user_active: boolean;
    user_created_at: string;
    user_updated_at: string;
    user_deleted: boolean;
  } | null;
  setUser: (user: {
    user_id: number;
    user_name: string;
    user_email: string;
    user_active: boolean;
    user_created_at: string;
    user_updated_at: string;
    user_deleted: boolean;
  }) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
