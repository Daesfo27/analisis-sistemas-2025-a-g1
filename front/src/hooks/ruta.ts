export function useLayout(pathname: string ) {
    const routes= [
    {
        path: '/',
        name: 'Inicio'
    },
    {
        path: '/user',
        name: 'Usuario'
    },
    {
        path: '/product',
        name: 'Producto'
    },
    {
        path: '/venta',
        name: 'Venta'
    }
    
    ];

    const title = pathname === "/"
    ? "Login"
    : pathname === "/user"
    ? "User"
    : "blog";
    return{
       title, routes
    }
}