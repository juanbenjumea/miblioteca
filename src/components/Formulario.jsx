import { useState, useEffect } from 'react';

const Formulario = () => {

    // Declaración de States en la parte superior del componente
    // El state estará disponible solo en este componente
    // No puede estar entre condicionales
    // Nombre de la variable y función modificadora
    // El argumento pasado es el valor inicial
    const [ titulo, setTitulo ] = useState( '' );
    const [ tipoPropio, setTipoPropio ] = useState( false );
    const [ tipoPrestamo, setTipoPrestamo ] = useState( false );
    const [ tipoDeseo, setTipoDeseo ] = useState( false );
    const [ tipo, setTipo ] = useState( null );

    const [ submitError, setSubmitError ] = useState( false );


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado");

        if(titulo === '' || tipo == false) {
            setSubmitError(true);
        }
        else {
            setSubmitError(false);
        }
    }

    const onTipoPropioChange = (e) => {
        console.log('propio', e.target.value)
        setTipoPropio( true );
        setTipo( 'propio' );
    }

    const onTipoPrestamoChange = (e) => {
        console.log('prestamo', e.target.value)
        setTipoPrestamo( true );
        setTipo( 'prestamo' );
    }

    const onTipoDeseoChange = (e) => {
        console.log('deseo', e.target.value)
        setTipoDeseo( true );
        setTipo( 'deseo' );
    }

    return (
        <div className="sm:w-2/5 lg:w-2/6  m-2 bg-gray-100 shadow-lg rounded-md p-5">
        
            <p className="text-center text-base mb-4 text-cyan-700 font-bold">
                Administra tus libros
            </p>
            <form onSubmit={ handleSubmit }>

                { submitError && (
                    <div className='bg-red-100 border-red-500 text-center text-sm text-red-500 mb-3 px-3 py-1'>
                        Todos los campos son oblitatorios
                    </div>
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

                <div className="mb-1">
                    <input type="radio" name="tipo" id="propio" className="mr-1"
                        value={ tipoPropio }
                        onChange={ onTipoPropioChange }
                        />
                    <label htmlFor="propio">Propio</label>
                </div>

                <div className="mb-1">
                    <input type="radio" name="tipo" id="prestamo" className="mr-1"
                        onChange={ onTipoPrestamoChange }
                        />
                    <label htmlFor="prestamo">Prestamo</label>
                </div>

                <div className="mb-1">
                    <input type="radio" name="tipo" id="deseo" className="mr-1"
                        onChange={ onTipoDeseoChange }
                        />
                    <label htmlFor="deseo">Deseo</label>
                </div>

                <button className="
                        bg-cyan-600 
                        text-white 
                        uppercase
                        text-sm 
                        mt-3 px-3 py-1 rounded-sm w-full 
                        hover:bg-cyan-700
                        transition-all
                        ">
                    Enviar
                    </button>
            </form>

        </div>
    )
}

export default Formulario