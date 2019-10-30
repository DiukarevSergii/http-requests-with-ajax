import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

    async componentDidMount() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = response.data.slice(0, 4)
        .map(post => {
          return {...post, author: 'Serg' }
        });
      this.setState({ posts });
    }

  render () {
        const posts = this.state.posts.map(post => <Post key={post.id} title={post.title} author={post.author}/>);

        return (
            <div>
                <section className="Posts">
                  {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
