import React, { useState } from 'react';

const Formulario = ({setBusqueda}) => {

    
const [termino, setTermino] = useState('');
const [error, setError] = useState(false);

const buscarImagenes = e => {
    e.preventDefault();

    // Validar
    if(termino.trim() === ''){
        setError(true);
        return;
    }
    setError(false);

    // Enviar el termino de búsqueda al componente principal
    setBusqueda(termino);

}

    return (  
        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className=" form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o café"
                        onChange={e => setTermino(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4 mt-2 mt-md-0 d-grid gap-1">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger "
                        value="Buscar"
                    />
                </div>
                {error 
                    ? 
                        <div 
                            className="alert alert-danger col-12 mt-3 text-center "
                        >Agrega un termino de búsqueda <i class="fas fa-exclamation-circle"></i></div> 
                    : 
                        null}
            </div>
        </form>
    );
}
 
export default Formulario;