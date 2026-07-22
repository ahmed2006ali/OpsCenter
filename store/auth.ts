import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types/auth";

const defaultUser: User = {
  id: "1",
  name: "Ahmed",
  email: "admin@opscenter.dev",
  role: "Admin",
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: () => set({ isAuthenticated: true, user: defaultUser }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: "opscenter-auth",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);
