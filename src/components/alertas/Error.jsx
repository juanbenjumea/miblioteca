const Error = ({ mensaje }) => {
    return (
        <div className='bg-red-100 text-center text-sm text-red-500 font-semibold mb-3 px-3 py-1'>
            { mensaje }
        </div>
    )
}

export default Error