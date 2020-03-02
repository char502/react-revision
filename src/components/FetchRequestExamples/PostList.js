import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  state = {
    posts: [],
    errorMsg: ""
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "error retrieving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    console.log(posts);
    return (
      <div>
        <h1>List of posts</h1>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
