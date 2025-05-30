import { axiosClient } from "@/service/axios.service";
import { create } from "zustand";

interface User {
    id: string;
    name: string;
    price: string;
    cantidad: string;
    createAt?: Date;
    updateAt?: Date;
}

type Store = {
    user: User | null;
    setUser: (newUser: Omit<User, "id" | "createAt" | "updateAt">) => Promise<void>;
}

export const useUserStore = create<Store>()((set) => ({
    user: null,
    setUser: async (newUser) => {
        try {
            const { data } = await axiosClient.post<User>('/product', newUser);
            set({ user: data });
            console.log("Usuario creado:", data);
        } catch (e) {
            console.error("Error al crear el usuario:", e);
        }
    }
}));
