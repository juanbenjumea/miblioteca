import { useState, useEffect } from "react";

import { Horse, Heart, Cube, Trash } from "phosphor-react";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Libros from "./components/Libros";

function App() {

    const [ libros, setLibros ] = useState([]);
    const [ libro, setLibro ] = useState({})

    // No se pasa dependencias, entonces se carga una sola vez cuando el componete está listo
    useEffect(() => {
        const librosLocalStorage = localStorage.getItem('libros');
        console.log(librosLocalStorage);
        if(librosLocalStorage && librosLocalStorage.length > 0) {
            setLibros(JSON.parse(librosLocalStorage))
        }
    }, [])
    

    useEffect(() => {
        localStorage.setItem('libros', JSON.stringify( libros ))    
    }, [libros])
    

    const agregarLibro = (libro) => {
        // La propedad 'libros' debe ser inmutable, es decir, no se debe modificar su estado original.
        // Se crea una copia y se usa el modificador setLibros para asignar los nuevos valores
        const nuevosLibros = [ ...libros, libro ];
        setLibros(nuevosLibros);
    }

    const editarLibro = (libroEditado, id) => {
        let nuevosLibros = libros.map( libroActual => {
            if(libroActual.id === id) {
                libroEditado.id = id;
                return libroEditado;
            }
            return libroActual;
        })

        setLibros(nuevosLibros);
    }

    const eliminarLibro = (id) => {
        let librosRestantes = libros.filter( libroEliminar => libroEliminar.id !== id );
        setLibros(librosRestantes)
    }

    return (
        <div className="container mx-auto mt-6">
            <Header />
            <div className="sm:flex sm:justify-center mt-4">
                <Formulario 
                    agregarLibro={ agregarLibro } 
                    editarLibro={ editarLibro }
                    libro={ libro }
                    setLibro={ setLibro } />
                <Libros libros={ libros } setLibro={ setLibro } eliminarLibro={ eliminarLibro }/>
            </div>

        </div>
    );
}

export default App;
