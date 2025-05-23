```mermaid
sequenceDiagram
    actor Usuario
    participant UI as Interfaz Web
    participant LibroCtrl as Controlador de Libros
    participant LibroSrv as Servicio de Libros
    participant LibroRepo as Repositorio de Libros
    participant PrestamoSrv as Servicio de Préstamos
    participant PrestamoRepo as Repositorio de Préstamos

    Usuario ->> UI: Buscar libro("Cien años de soledad")
    UI ->> LibroCtrl: buscarLibro("Cien años de soledad")
    LibroCtrl ->> LibroSrv: buscarPorTitulo("Cien años de soledad")
    LibroSrv ->> LibroRepo: findByTitulo("Cien años de soledad")
    LibroRepo -->> LibroSrv: ListaLibros
    LibroSrv -->> LibroCtrl: ListaLibros
    LibroCtrl -->> UI: ListaLibros
    UI -->> Usuario: Mostrar resultados

    Usuario ->> UI: Seleccionar libro
    UI ->> LibroCtrl: verDetalleLibro(idLibro)
    LibroCtrl ->> LibroSrv: obtenerDetalleLibro(idLibro)
    LibroSrv ->> LibroRepo: findById(idLibro)
    LibroRepo -->> LibroSrv: Libro
    LibroSrv -->> LibroCtrl: Libro
    LibroCtrl -->> UI: Detalles del libro
    UI -->> Usuario: Mostrar detalles

    Usuario ->> UI: Solicitar préstamo
    UI ->> LibroCtrl: solicitarPrestamo(idLibro, idUsuario)
    LibroCtrl ->> PrestamoSrv: crearPrestamo(idLibro, idUsuario)
    PrestamoSrv ->> LibroRepo: verificarDisponibilidad(idLibro)
    LibroRepo -->> PrestamoSrv: Disponible
    PrestamoSrv ->> PrestamoRepo: guardarPrestamo(idLibro, idUsuario)
    PrestamoRepo -->> PrestamoSrv: PrestamoOK
    PrestamoSrv -->> LibroCtrl: PrestamoOK
    LibroCtrl -->> UI: Confirmación de préstamo
    UI -->> Usuario: Préstamo exitoso
