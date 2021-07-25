import axios from 'axios';
import React, {Component} from 'react'

export default class AddNews extends Component{

    state = {
        title:'',
        description:'',
        author:'',
    }

    handleSubmit = event => {
        event.preventDefault();
        //make a post request to the server
        axios.post('/api/news', {
            title: this.state.title,
            description: this.state.description,
            author: this.state.description
        })
        .then(() => {
            this.setState({
                title: '',
                description: '',
                author: ''
            })
            //trigger getData() in News.js to retrieve the current list of news from the server
            this.props.getData();
        })
        .catch(err => console.log(err))
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="title">title</label>

                    <input

                        type="text"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}

                    />

                    <label htmlFor="description">description</label>

                    <input

                        type="text"
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}

                    />

                    <label htmlFor="author">author</label>

                    <input

                        type="text"
                        id="author"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleChange}

                    />

                    <button type="submit">Add this News</button>

                </form>
     
            </div>
         )


    }
    
}

