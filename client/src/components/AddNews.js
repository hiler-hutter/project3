import axios from 'axios';
import React, {Component} from 'react'

export default class AddNews extends Component{

    state = {
        title:'',
        author:'',
        description:''
    }

    handleSubmit = event => {
        event.preventDefault();
        //make a post request to the server
        axios.post('/api/news', {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            link:'N/A'
        })
        .then(() => {
            this.setState({
                title: '',
                author: '',
                description: ''
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
            <div className="add-news">
                <h4>Write interesting news</h4>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="title"></label>

                    <input className="controls-add"

                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}

                    /><br></br>

                    <label htmlFor="author"></label>

                    <input className="controls-add"

                        type="text"
                        id="author"
                        name="author"
                        placeholder="Author"
                        value={this.state.author}
                        onChange={this.handleChange}

                    /><br></br>

                    <label htmlFor="description"></label>

                    {/* <input className="descrip-inp"

                    type="text"
                    id="description"
                    name="description"
                    placeholder="News Content"
                    value={this.state.description}
                    onChange={this.handleChange} */}
                    <textarea className="descrip-inp"
                     cols="40" 
                     rows="10"
                     type="text"
                    id="description"
                    name="description"
                    placeholder="News Content"
                    value={this.state.description}
                    onChange={this.handleChange}
                     ></textarea><br></br>

                    <button type="submit" className="but-addN">Add this News</button>

                </form>
     
            </div>
         )


    }
    
}

