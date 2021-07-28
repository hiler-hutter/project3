import React, { Component } from 'react'
import axios from 'axios';
import NewList from './NewList';

export default class Profile extends Component {

	state = {
		news: []
	}

	getData = () => {
		axios.get('http://localhost:5005/api/news')
			.then(response => {
				console.log(response);
                this.setState({
                    news: response.data
                })
            })
			
			.catch(err => console.log(err))
	}

	componentDidMount() {
		this.getData();
	}

	render() {
       
        const myNews = this.state.news.filter(el => {
			return el.author === this.props.user.username

		  })
		  console.log(myNews)
		  console.log(this.props.user.username)
		return (
			<div className="all-news">
    
                <NewList news={myNews} />
				
            </div>
		)
	}
}
