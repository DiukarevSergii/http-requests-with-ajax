import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    constructor () {
      super();
      this.state = {
        loadedPost: null,
      }
    }
    async componentDidUpdate () {
      if (this.props.id && (!this.state.loadedPost || this.props.id !== this.state.loadedPost.id)) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id);
        this.setState({ loadedPost: response.data });
      }
    }

    deletePostHandler = async () => {
      const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id);
      console.log(response);
    };

    render () {
      let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

      if (this.props.id) {
        post = <p style={{textAlign: 'center'}}>Loading...</p>;
      }

      if (this.state.loadedPost){
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
              <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
            </div>
          </div>

        );
      }

      return post;
    }
}

export default FullPost;
