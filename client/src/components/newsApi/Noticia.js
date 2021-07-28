import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';
import axios from 'axios';

const Noticia = ({noticia, user}) => {
    // extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    : null;
    const saveNews = () => {
        console.log('save is ready')
        const { urlToImage, url, title, description, source } = noticia;
        console.log(user)

        axios.post('/api/news', {
			title,
			description,
            author:user.username,
            link:url
            

		})
			.then(response => {
                console.log(response)
				/* this.setState({
					news: response.data,
					title: response.data.title,
					description: response.data.description,
                    author: response.data.author,
					editForm: false
				}) */
			})
			.catch(err => console.log(err))
    }

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                {/* //col s12 m6 */}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >go to the news</a>  
                    <button onClick={saveNews} className="button-saveNews">Save this News</button>
                    
                    {/* <a
                        href={`/:id/profile`}
                        className="waves-effect waves-light btn"
                    >save this news</a> */}
                </div>
            </div>
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;