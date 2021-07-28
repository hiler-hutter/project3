import React from 'react'
import {Link} from 'react-router-dom';
import IMG from '../images/aidan-bartos.jpg'

//const logoImg = require.context('../../src/assets/img', true);

export default function NewList(props){

    return(
        <div>

            {props.news.length > 0 && <h2>These are all the saved News:</h2>}

            {props.news.map(news => {

                return(
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

                )
            })}
        </div>
    )
}

