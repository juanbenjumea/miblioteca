import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import  Error from './alertas/Error';

const Formulario = ({ agregarLibro, editarLibro, libro, setLibro }) => {

    // Declaración de States en la parte superior del componente
    // El state estará disponible solo en este componente
    // No puede estar entre condicionales
    // Nombre de la variable y función modificadora
    // El argumento pasado es el valor inicial
    const [ titulo, setTitulo ] = useState('');
    const [ tipoPropio, setTipoPropio ] = useState(false);
    const [ tipoPrestamo, setTipoPrestamo ] = useState(false);
    const [ tipoDeseo, setTipoDeseo ] = useState(false);
    const [ tipo, setTipo ] = useState(null);

    const [ submitError, setSubmitError ] = useState(false);

    // Se ejecuta cada que 'Libro' cambie
    useEffect(() => {
        // Detecar si un objeto está vacío
        if( Object.keys(libro).length > 0 ) {
            setTitulo(libro.titulo);
            setTipo(libro.tipo);
        }
    }, [libro]);

    // Sin tercer argumento: Se ejecuta una vez, cuando el componente está listi
    useEffect(() => {
        //console.log('componente listo')
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(titulo === '' || tipo === null) {
            setSubmitError(true);
        }
        else {
            setSubmitError(false);
            
            console.log(libro);
            console.log(Object.keys(libro));
            if( Object.keys(libro).length === 0 ) {
                agregarLibro({ 'id': uuidv4(), 'titulo': titulo, 'tipo': tipo });
            }
            else {
                editarLibro({ 'titulo': titulo, 'tipo': tipo }, libro.id)
            }

            setTitulo('');
            setTipoPropio(false);
            setTipoPrestamo(false);
            setTipoDeseo(false);
            setTipo(null);
            setLibro({})
        }
    }

    const onTipoChange = (e) => {
        setTipo(e.target.value);
    }

    return (
        <div className="sm:w-2/5 lg:w-2/6  m-2 bg-gray-100 shadow-lg rounded-md p-5">
        
            <p className="text-center text-base mb-4 text-cyan-700 font-bold">
                Administra tus libros
            </p>
            <form onSubmit={ handleSubmit }>

                { submitError && (
                    <Error mensaje="Todos los campos son oblitatorios" />
                ) }

                <div className="mb-3">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" id="titulo" 
                            className="
                            w-full 
                            shadow-sm
                            p-2
                            focus:border-white"
                        value={ titulo }
                        onChange={ (e) => setTitulo(e.target.value) } 
                        />
                </div>

                <div>
                    <div className="mb-1">
                        <input type="radio" value="Propio" name="tipo" id="propio" className="mr-1"
                            checked={tipo === "Propio"}
                            onChange={ onTipoChange }
                        />
                        <label htmlFor="propio">Propio</label>
                    </div>

                    <div className="mb-1">
                        <input type="radio" value="Prestamo" name="tipo" id="prestamo" className="mr-1"
                            checked={tipo === "Prestamo"}
                            onChange={ onTipoChange }
                        />
                        <label htmlFor="prestamo">Prestamo</label>
                    </div>

                    <div className="mb-1">
                        <input type="radio" value="Deseo" name="tipo" id="deseo" className="mr-1"
                            checked={tipo === "Deseo"}
                            onChange={ onTipoChange }
                        />
                        <label htmlFor="deseo">Deseo</label>
                    </div>
                </div>

                <button className="
                        bg-cyan-600 
                        text-white 
                        uppercase
                        text-sm 
                        mt-3 px-3 py-1 rounded-sm w-full 
                        hover:bg-cyan-700
                        transition-all
                        font-semibold
                        ">
                    Enviar
                </button>
            </form>

        </div>
    )
}

export default Formulario