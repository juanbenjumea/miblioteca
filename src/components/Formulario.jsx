const Formulario = () => {
    return (
        <div className="sm:w-3/5 lg:w-2/6  m-2 bg-gray-100 shadow-lg rounded-md p-5">
            
            <div>
                <p className="text-center text-base mb-4 text-cyan-700 font-bold">
                    Administra tus libros
                </p>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" 
                                className="
                                w-full 
                                shadow-sm
                                focus:border-white
                                " />
                    </div>

                    <div className="mb-1">
                        <input type="radio" id="propio" className="mr-1"/>
                        <label htmlFor="propio">Propio</label>
                    </div>

                    <div className="mb-1">
                        <input type="radio" id="prestamo" className="mr-1"/>
                        <label htmlFor="prestamo">Prestamo</label>
                    </div>

                    <div className="mb-1">
                        <input type="radio" id="deseo" className="mr-1"/>
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
        </div>
    )
}

export default Formulario