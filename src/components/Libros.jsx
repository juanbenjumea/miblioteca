import Libro from "./Libro"


const Libros = () => {
    return (
        <div className="sm:w-3/5 lg:w-2/6 m-2 bg-gray-100 shadow-lg rounded-md p-5">
            <p className="text-center font-bold text-base mb-4 text-cyan-700">
                Todos los libros
            </p>

            <ul>
                <Libro/>
            </ul>
        </div>
    )
}

export default Libros