import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import ListadoNoticias from './ListadoNoticias';
import axios from 'axios';

function ApiData(props) {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
   /*  const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=dba1d148de644510a8e7d76678c94a34`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI(); */
    axios.get(`/api/news/${categoria}`)
    .then(response => {
      console.log(response.data)
      guardarNoticias(response.data);
    }).catch(error => {
      console.log(error)
    })
  }, [categoria]);

  return (
    <Fragment>
        <Header 
          titulo='Breaking News in USA'
        />

        <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias
            user={props.user} 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default ApiData;
