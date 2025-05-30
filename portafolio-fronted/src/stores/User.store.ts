import {axiosClient } from "@/services/axios.services";
import { create } from "zustand";


interface UserState {
    id        :       String 
    nombre  :        String 
  biografia :      String;
  correo    :       String;
  contraseña  :     String
  ciudad    :       String
  registradoEn   :  Date;
  updatedAt  ? :    Date;
}

type UserStore = {
    user: UserState | null
    getUser (): void
    }

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    getUser: async () => {
        try { 
            const { data } = await axiosClient.get<UserState>('/user');
            set({ user: data });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
}));
