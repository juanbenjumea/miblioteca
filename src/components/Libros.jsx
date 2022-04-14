import Libro from "./Libro"


const Libros = () => {

    const libros = [
        { 'id': 1, 'titulo': 'El principito 1' },
        { 'id': 2, 'titulo': 'El principito 2' },
        { 'id': 3, 'titulo': 'El principito 3' },
        { 'id': 4, 'titulo': 'El principito 4' },
    ];

    const listaLibros = libros.map((libro) =>  <Libro key={ libro.id } libro={ libro } /> );

    return (
        <div className="sm:w-3/6 lg:w-2/6 m-2 bg-gray-100 shadow-lg rounded-md p-5">
            <p className="text-center font-bold text-base mb-4 text-cyan-700">
                Todos los libros
            </p>

            <ul>
                { listaLibros }
            </ul>
        </div>
    )
}

export default Libros