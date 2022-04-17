import { Trash, Pencil } from "phosphor-react";

const Libro = ({ libro, setLibro, eliminarLibro }) => {

    const { id, titulo, tipo } = libro;

    return (
        <li className="my-3 p-3 shadow-md shadow-gray-200 flex justify-between items-start">
            <div>
                <span className="text-lg font-bold">{ `${ titulo } (${ tipo })` }</span>
                <span className=" text-cyan-600 text-sm flex justify-start">
                    <span className="font-bold cursor-pointer">Propio</span>
                    <span className="font-light hover:font-semibold cursor-pointer mx-2">Prestamo</span>
                    <span className="font-light hover:font-semibold cursor-pointer">Deseo</span>
                </span>
            </div>
            <div>
                <button type="button"
                    onClick={ () => setLibro(libro) }
                    ><Pencil color="#0891b2" size={20} /></button>
                <button type="button" className="ml-2"
                    onClick={ () => eliminarLibro(id) }><Trash color="#e32929"  size={20} /></button>
            </div>
        </li>
    );
};

export default Libro;
