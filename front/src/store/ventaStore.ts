import { axiosClient } from "@/service/axios.service";
import { create } from "zustand";

interface User {
    id: string;
    userId: string;
    productId: string;
    createAt?: Date;
    updateAt?: Date;
    user?: {
    id: string;
    name: string;
  };
  product?: {
    name: string;
  };
}

type Store = {
  venta: User | null;
  ventas: User[]; 
  setUser: (newUser: Omit<User, "id" | "createAt" >) => Promise<void>;
  getReservation: () => Promise<void>;
};

export const useUserStore = create<Store>()((set) => ({
  venta: null,
  ventas: [],
  setUser: async (newUser) => {
    try {
      const { data } = await axiosClient.post<User>('/venta', newUser);
      set({ venta: data });
      console.log("venta creada:", data);
    } catch (e) {
      console.error("Error al crear la Venta:", e);
      throw e;
    }
  },
  getReservation: async () => {
    try {
      const { data } = await axiosClient.get<User[]>('/venta');
      set({ ventas: data });
    } catch (e) {
      console.error("Error al obtener las ventas:", e);
    }
  },
}));

