import {create} from 'zustand';
import AsyncStorage from '@mainamiru/react-native-async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';

export interface userDetails {
  email: string;
  token: string;
}

interface AuthStoreProps {
  loggedIn: boolean;
  user: userDetails | null;
  setUser: (user: userDetails) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthStoreProps>()(
  persist(
    set => ({
      loggedIn: false,
      user: null,
      setUser: (user: userDetails) => set({user: user, loggedIn: true}),
      logOut: () => set({loggedIn: false, user: null}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

// export const useAuthStore = create<AuthStoreProps>(set => ({
//   loggedIn: false,
//   user: null,
//   setUser: (user: userDetails) => set({user: user, loggedIn: true}),
//   logOut: () => set({loggedIn: false, user: null}),
// }));
