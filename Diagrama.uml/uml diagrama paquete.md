```mermaid
classDiagram
    class Cliente {
        +id
        +nombre
        +email
    }

    class Producto {
        +id
        +nombre
        +precio
        +cantidad
        +createdAt
        +updatedAt
    }

    class Venta {
        +id
        +userId (FK)
        +productId (FK)
        +createdAt
        +updatedAt
    }

    Cliente "1" --> "n" Venta
    Producto "1" --> "n" Venta
