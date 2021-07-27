import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/news-felix.jpg'

//const logoImg = require.context('../../src/assets/img', true);

export default function NewList(props){

    return(
        <div>

            {props.news.length > 0 && <h2>These are all the saved News:</h2>}

            {props.news.map(news => {

                return(
                    <div key={news._id} className="card-divI">
                        <div>
                            <img src={Logo} alt={''} width="200" height="100" className="logo"/>
                        </div>
                        {/* <div className="card">
                            <div>
                            <img src={priscila} alt={'alt'} width="200" height="80"/> */}
                                <Link to={`/news/${news._id}`}>

                                <h3 className="h3-newsL">{news.title}</h3>

                                </Link>
                            {/*</div>
                        
                        </div>*/}
                    </div>
                )
            })}
        </div>
    )
}

