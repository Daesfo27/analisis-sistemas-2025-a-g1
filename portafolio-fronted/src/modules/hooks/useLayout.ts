import path from "path";

export function useLayout(pathname: string) {
    const routes = [
        {
            path: '/',
            name: 'Usuario'
        },
        {
            path: '/books',
            name: 'Libros'
        },
        {
            path: '/listings',
            name: 'Listados'
        },
        {
            path: '/message',
            name: 'Mensajes'
        },
        {
            path: '/exchange',
            name: 'Intercambio',
        }

    ];

    const title = pathname === "/"
        ? "Usuario"
        : pathname === "/books"
            ? "Libros"
            : pathname === "/listings"
                ? "Listados"
                : pathname === "/message"
                    ? "Mensajes"
                    : pathname === "/exchange"
                        ? "Intercambio"
                        : "Dashboard";

    return {
        title, routes
    }


}