import React from 'react'
import {Link} from 'react-router-dom';

export default function NewList(props){

    return(
        <div>

            {props.news.length > 0 && <h2>These are all the saved News:</h2>}

            {props.news.map(news => {

                return(
                    <div key={news._id}>
                        <h3>

                          <Link to={`/news/${news._id}`}>

                            {news.title}

                          </Link>

                        </h3>

                    </div>
                )
            })}
        </div>
    )
}

