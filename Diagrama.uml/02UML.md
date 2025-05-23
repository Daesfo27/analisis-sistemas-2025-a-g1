```mermaid
sequenceDiagram
    box UI
        participant Usuario
        participant Interfaz
    end

    box Controller
        participant LibroController
    end

    box Service
        participant LibroService
        participant PrestamoService
    end

    box Repository
        participant LibroRepository
        participant PrestamoRepository
    end

    Usuario ->> Interfaz: Buscar libro("Cien años de soledad")
    Interfaz ->> LibroController: buscarLibro("Cien años de soledad")
    LibroController ->> LibroService: buscarPorTitulo("Cien años de soledad")
    LibroService ->> LibroRepository: findByTitulo("Cien años de soledad")
    LibroRepository -->> LibroService: ListaLibros
    LibroService -->> LibroController: ListaLibros
    LibroController -->> Interfaz: ListaLibros
    Interfaz -->> Usuario: Mostrar resultados

    Usuario ->> Interfaz: Seleccionar libro
    Interfaz ->> LibroController: verDetalleLibro(idLibro)
    LibroController ->> LibroService: obtenerDetalleLibro(idLibro)
    LibroService ->> LibroRepository: findById(idLibro)
    LibroRepository -->> LibroService: Libro
    LibroService -->> LibroController: Libro
    LibroController -->> Interfaz: Detalles del libro
    Interfaz -->> Usuario: Mostrar detalles

    Usuario ->> Interfaz: Solicitar préstamo
    Interfaz ->> LibroController: solicitarPrestamo(idLibro, idUsuario)
    LibroController ->> PrestamoService: crearPrestamo(idLibro, idUsuario)
    PrestamoService ->> LibroRepository: verificarDisponibilidad(idLibro)
    LibroRepository -->> PrestamoService: Disponible
    PrestamoService ->> PrestamoRepository: guardarPrestamo(idLibro, idUsuari
