import axios from 'axios';
import React, { Component } from 'react'
import EditNews from './EditNews';


export default class NewsDetails extends Component {

	state = {
		news: null,

        title: '',

        author: '',

        description: '',

        error: null,

        editForm: false
	}

    getData = () => {
        const id = this.props.match.params.id;

        axios.get(`/api/news/${id}`)

        .then(response => {

            //console.log(response.data)
            this.setState({

                news: response.data,

                title: response.data.title,

                author: response.data.author,

                description: response.data.description,
            })
        })

        .catch(err => {
            
            console.log(err);

            if(err.response.status === 404){

                this.setState({
                    error: 'Not Found!'
                })
            }
            
        })

    }

    deleteNews = () => {
        //delete the news in the database

        axios.delete(`/api/news/${this.state.news._id}`)

        .then(() => {
            //redirect to the news list

            //redirect using react router

            this.props.history.push('/news');
        })

        .catch(err => console.log(err))
    }

	componentDidMount(){
        this.getData();

    }

    handleChange = e => {

        const {name, value} = e.target;

        this.setState({

            [name]: value
        })
    }

    toggleEditForm = () => {
        this.setState(state => ({
            editForm: !this.state.editForm
        }))
    }

    handleSubmit = e => {
		e.preventDefault();
		const { title, description, author } = this.state;
		axios.put(`/api/news/${this.state.news._id}`, {
			title,
			description,
            author
		})
			.then(response => {
				this.setState({
					news: response.data,
					title: response.data.title,
					description: response.data.description,
                    author: response.data.author,
					editForm: false
				})
			})
			.catch(err => console.log(err))
	}


	render() {
        if (this.state.error) return <h2>{this.state.error}</h2>
        if(!this.state.news) return <></>

		return (

		
            <div>
                <div className="details-news">
                
                    <h2>Title: {this.state.news.title}</h2>  
                    <h2>Author: {this.state.news.author}</h2>  
                    <h2>Description: {this.state.news.description}</h2>

                </div> 
               
                <button onClick={this.deleteNews} className="button-delete">Delete this News</button><br></br>  
                <button onClick={this.toggleEditForm} className="button-edit">Show Edit form</button>
                {this.state.editForm && (
					<EditNews
						//title={this.state.title}
						// description={this.state.description}
						{...this.state}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
					/>
				)}

                
            </div>
		)
	}
}
