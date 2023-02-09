import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lista from "./components/Lista";
import { useEffect, useState } from "react";
import { getDeportistas } from "./api/Rule_info";

function App() {
  const [arrayDeportistas, setArrayDeportistas] = useState([]);
  useEffect(() => {
    getDeportistas().then((data) => {
      setArrayDeportistas(data);
      setArrayOriginal(data);
    });
  }, []);

  const [arrayOriginal, setArrayOriginal] = useState([]);
  const filtrar = (buscar) => {
    if (buscar === "") {
      setArrayDeportistas(arrayOriginal);
    } else {
      const arrayFiltrado = [...arrayOriginal].filter((deportista) => {
        if (buscar === "") {
          return deportista;
        } else {
          return deportista.nombre.toLowerCase().includes(buscar.toLowerCase());
        }
      });
      setArrayDeportistas(arrayFiltrado);
    }
  };

  return (
    <div className="contenedor">
      <Header filtrar={filtrar} className="header" />
      <Lista listaDeportistas={arrayDeportistas} className="cuadrados" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
