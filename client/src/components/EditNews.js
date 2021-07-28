import React, {Component} from 'react';

export default class EditNews extends Component {

    render(){

        return(

            <div className="edit-news">

                <h3>Edit this News</h3>

                <form onSubmit={this.props.handleSubmit}>

                    <label htmlFor="title">Title: </label>

                    <input className="controls-edit"

                        id="title"
                        type="text"
                        name="title"
                        value={this.props.title}
                        onChange={this.props.handleChange}
                    /><br></br>

                    <label htmlFor="author">Author: </label>

                    <input className="controls-edit"

                    id="author"
                    type="text"
                    name="author"
                    value={this.props.author}
                    onChange={this.props.handleChange}
                    /><br></br>

                
                    <label htmlFor="description"></label>
                    <div id="contenedor">
                   {/*  <input className="edit-inp"
                    contentEditable="true"
                    id="description"
                    type="text"
                    name="description"
                    value={this.props.description}
                    onChange={this.props.handleChange} */}
                    <textarea className="edit-inp"
                     cols="40" 
                     rows="10"
                     type="text"
                    id="description"
                    name="description"
                    placeholder="News Content"
                    value={this.props.description}
                    onChange={this.props.handleChange}>
                    </textarea>
                    </div><br></br>

                   {/*  <div id="contenedor">
                        <div id="description"
                            type="text"
                            name="description"
                            value={this.props.description}
                            onChange={this.props.handleChange}
                            contenteditable="true">

                        </div>
                    </div> */}
                
                    <button type="submit" className="but-editN">Update this News</button>
                </form>

            </div>
        )
    }
}