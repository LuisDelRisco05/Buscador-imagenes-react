import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';
import axios from 'axios';
import style from './components/Estilos.module.css';

function App() {

  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [paginaactual, setPaginaActual] = useState(1);
  const [totalpaginas, setTotalPagina] = useState(5);

  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return;

      const imagenesPorPagina = 30;
      const key= '21424709-ffa496c902047a67fceab5b6f';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await axios(url);
      setImagenes(respuesta.data.hits);

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(respuesta.data.totalHits / imagenesPorPagina);
      setTotalPagina(calcularTotalPaginas);
      
      // mover la pantalla hacia arriba
      const principal = document.querySelector('.principal');
      principal.scrollIntoView({ behavior: 'smooth'});
    }
    consultarApi();
  }, [busqueda, paginaactual])

  // definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual -1;

    if(nuevaPaginaActual === 0 ) return;
    
    setPaginaActual(nuevaPaginaActual);
  }

  // definir la página siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual +1;
    
    if(nuevaPaginaActual > totalpaginas) return;
  
    setPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className={`${style.body}`}>
        <div className="container">

            <div className="bg-dark p-5  mx-auto text-white rounded-bottom principal">
                <p className="text-center">Buscador de Imágenes</p>
                <Formulario 
                  setBusqueda={setBusqueda}
                />
            </div>

            <div className="row justify-content-center">
                <ListadoImagenes 
                  imagenes={imagenes}
                />

                {
                  (paginaactual === 1)
                  ?
                    null
                  :
                    (<button
                        type="button"
                        className="btn btn-info me-1 w-25 rounded-0 mb-3"
                        onClick={paginaAnterior}
                    >Anterior &larr;</button>)
                }

                {
                  (paginaactual === totalpaginas)
                  ?
                    null
                  :
                    (<button
                        type="button"
                        className="btn btn-info me-1 w-25 rounded-0 mb-3"
                        onClick={paginaSiguiente}
                    >Siguiente &rarr;</button>)
                }
            </div>
        </div>
    </div>  
  );
}

export default App;
