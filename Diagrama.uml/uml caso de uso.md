```mermaid
%% Diagrama de Casos de Uso para Sistema de Gestión de Papelería

actor Empleado
actor Administrador

usecase "Registrar Cliente" as UC1
usecase "Registrar Producto" as UC2
usecase "Registrar Venta" as UC3
usecase "Consultar Inventario" as UC4
usecase "Consultar Historial de Ventas" as UC5
usecase "Editar Datos de Clientes" as UC6
usecase "Generar Reportes de Venta" as UC7

Empleado --> UC1
Empleado --> UC2
Empleado --> UC3
Empleado --> UC4
Empleado --> UC5

Administrador --> UC1
Administrador --> UC2
Administrador --> UC3
Administrador --> UC4
Administrador --> UC5
Administrador --> UC6
Administrador --> UC7