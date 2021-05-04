import React from 'react';

const Imagen = ({imagen}) => {

    // extraer las variables
    const { largeImageURL, likes, previewURL, tags, views } = imagen; 

    return (  
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>

                <div className="card-body">
                    <div className="card-text">
                        <p>{likes} Me Gusta</p> 
                        <p>{views} Vistas</p>                          
                    </div>

                    <div className="card-footer d-grid gap-1">
                        <a 
                            href={largeImageURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success"
                        >Ver Imagen</a>
                    </div>

                </div>
            </div>

        </div>
    );
}
 
export default Imagen;