import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    constructor(){
      super();
      this.state = {
        title: '',
        content: '',
        author: 'Max'
      };
    }

    postDataHandler = async () => {
      const data = {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author,
      };
      const responce = await axios.post('https://jsonplaceholder.typicode.com/posts/', data);
      console.log(responce);
    };

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
