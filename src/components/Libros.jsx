import { useEffect } from "react";
import Libro from "./Libro"


const Libros = ({ libros, setLibro, eliminarLibro }) => {

    useEffect( () => {
        libros.length > 0 && console.log("nuevo libro")
    }, [libros])

    return (
        <div className="sm:w-3/6 lg:w-2/6 m-2 bg-gray-100 shadow-lg rounded-md p-5">
            <p className="text-center font-bold text-base mb-4 text-cyan-700">
                { (libros && libros.length)? 
                    <>Todos tus libros   </>
                    : 
                    <>Crea tur primer libro en el formulario</>
                 }
            </p>

            <ul>
                { 
                    libros.map( libro =>  
                    <Libro key={ libro.id } 
                        libro={ libro } 
                        setLibro={ setLibro }
                        eliminarLibro={ eliminarLibro }/> )
                }
            </ul>
        </div>
    )
}

export default Libros