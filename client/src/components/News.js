import React, { Component } from 'react'
import axios from 'axios';
import NewList from './NewList';
import AddNews from './AddNews'

export default class News extends Component {

	state = {
		news: []
	}

	getData = () => {
		axios.get('/api/news')
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
		return (
			<div className="all-news">
                <AddNews getData={this.getData}/>
                <NewList news={this.state.news} />
            </div>
		)
	}
}
