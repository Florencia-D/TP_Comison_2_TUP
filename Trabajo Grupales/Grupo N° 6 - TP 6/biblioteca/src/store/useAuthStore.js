// // CORRECTO:
// import { create } from "zustand";

// export const useAuthStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   logout: () => set({ user: null }),
// }));


import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
}));
