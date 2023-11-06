import axios from 'axios';
import React, { Component } from 'react';

import { StyledPosts } from './PostsPage.styled';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';

// rcc - react class component
// rafce - react arrow function expression component export default

export default class PostsPage extends Component {
  state = {
    posts: null,
    comments: null,
    selectedPostId: null,

    isLoading: false,
    error: null,
  };

  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      this.setState({
        posts: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  fetchPostComments = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.state.selectedPostId}`
      );

      this.setState({
        comments: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onSelecPostId = postId => {
    this.setState({
      selectedPostId: postId,
    });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.selectedPostId !== this.state.selectedPostId) {
      this.fetchPostComments();
    }
  }

  render() {
    return (
      <StyledPosts>
        <h1>HTTP-requests</h1>

        {this.state.error !== null && (
          <p className="error-bage">
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}
        <div className="listWrapper">
          <ul className="postList">
            {this.state.posts !== null &&
              this.state.posts.map(post => {
                return (
                  <li
                    key={post.id}
                    // onClick={() => this.onSelecPostId(post.id)}
                    className="postListItem"
                  >
                    <Link to={`/posts/${post.id}`}>
                      <h2 className="itemTitle">{post.title}</h2>
                      <p className="itemBody">
                        <b>Body:</b> {post.body}
                      </p>
                    </Link>
                  </li>
                );
              })}
          </ul>
          <ul className="commentsList">
            {this.state.selectedPostId !== null && (
              <li className="commentsListItem">
                Selected post id: {this.state.selectedPostId}
              </li>
            )}
            {this.state.comments !== null &&
              this.state.comments.map(comment => {
                return (
                  <li key={comment.id} className="commentsListItem">
                    <h2 className="commentTitle">Name: {comment.name}</h2>
                    <h3 className="commentEmail">Email: {comment.email}</h3>
                    <p className="commentBody">
                      <b>Body:</b> {comment.body}
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
      </StyledPosts>
    );
  }
}
