import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Libros from "./components/Libros";

function App() {

  return (
    <div className="container mx-auto mt-6">
      <Header/>
      <div className="sm:flex sm:justify-center mt-4">
        <Formulario/>
        <Libros/>
      </div>
    </div>
  )
}

export default App
