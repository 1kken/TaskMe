import { create } from "zustand";
import {persist} from "zustand/middleware";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

// export const useUserStore = create<UserState>(
//     (set) => ({
//     user: null,
//     setUser: (user) => set({ user }),
//     clearUser: () => set({ user: null }),
// }));

export const useUserStore = create<UserState>()(
    persist(
        (set,get) => ({
            user:null,
            setUser: (user) => set({user}),
            clearUser: () => set({user:null})
        }),
        {
            name:'task-me-user'
        }
    )
)


