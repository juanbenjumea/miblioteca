const Libro = ({ libro }) => {

    const { id, titulo } = libro;

    return (
        <li className="my-3 p-3 shadow-md shadow-gray-200 ">
            <span className="text-lg font-bold">{ `${ id }. ${ titulo }` }</span>
            <span className=" text-cyan-600 text-sm flex justify-start">
                <span className="font-bold cursor-pointer">Propio</span>
                <span className="font-light hover:font-semibold cursor-pointer mx-2">Prestamo</span>
                <span className="font-light hover:font-semibold cursor-pointer">Deseo</span>
            </span>
        </li>
    );
};

export default Libro;
