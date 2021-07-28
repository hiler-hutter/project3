import React from 'react'
import {Link} from 'react-router-dom';
import IMG from '../images/news.jpg'

//const logoImg = require.context('../../src/assets/img', true);

export default function NewList(props){

    return(
        <div>

            {props.news.length > 0 && <div className="title-news"><h2 className="h2-news">Saved and Created News</h2></div>}

            {props.news.map(news => {
                return  news.link === 'N/A' ? (
                    <div key={news._id} className="card-divI">
                        <div>
                            <img src={IMG} alt={''} width="395" height="350" className="logo"/>
                        </div> 
                        <div className="card">
                            <div>
                                <Link to={`/news/${news._id}`}>

                                <h4 className="h3-newsL">{news.title}</h4>
                                <h5 className="h3-newsL">Author: {news.author}</h5>



                                </Link>
                            </div>
                        
                        </div>
                    </div>  

                ) :(
                    <div key={news._id} className="card-divI">
                        <div>
                            <img src={IMG} alt={''} width="395" height="350" className="logo"/>
                        </div> 
                        <div className="card">
                            <div>

                                <h4 className="h3-newsL">{news.title}</h4>
                                <h5 className="h3-newsL">Author: {news.author}</h5>
                                <a href={news.link} className="news-link">Link</a>

                            </div>
                        
                        </div>
                    </div>  
                )
            
            })}
            
        </div>
    )
}

