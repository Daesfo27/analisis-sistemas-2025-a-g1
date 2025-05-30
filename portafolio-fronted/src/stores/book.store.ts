import {axiosClient } from "@/services/axios.services";
import { create } from "zustand";


interface BookState {
 id   :            String;
  titulo       :    String
  autor       :     String
  codigoLibro   :   String ;
  estado     :      String;
  propietario :      Number;
  disponibilidad :   String ;
  createdAt:        Date;
  updatedAt? :        Date;
}

type BookStore = {
    book: BookState | null
    getUser (): void
    }

export const useBookStore = create<BookStore>((set) => ({
    book: null,
    getUser: async () => {
        try { 
            const { data } = await axiosClient.get<BookState>('/book');
            set({ book: data });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
}));
