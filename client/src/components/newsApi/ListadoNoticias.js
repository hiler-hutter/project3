import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types'

const ListadoNoticias = ({user, noticias}) =>  ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                    user={user}
                />
            ))}
        </div>
);

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;