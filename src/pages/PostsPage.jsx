// import axios from 'axios';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

// rcc - react class component
// rafce - react arrow function expression component export default

const PostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedPosts, setSearchedPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  // ?query=123
  const queryValue = searchParams.get('query'); // '123'
  // CTRL + SHIFT + L

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!queryValue) return;
    const fetchSearchedPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${queryValue}`
        );
        // ВАМ ПОТРІБНО БУДЕ ПРОСТО ЗРОБИТИ setSearchedPosts(data)
        setSearchedPosts([data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchedPosts();
  }, [queryValue]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <span>Search post by id:</span>
          <input type="text" name="searchKey" required placeholder="12" />
        </label>
        <button type="submit">Search post</button>
      </form>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {searchedPosts !== null &&
        searchedPosts.map(post => {
          return (
            <Link
              state={{ from: location }}
              key={post.id}
              to={`/posts/${post.id}`}
            >
              <div>
                <h2>{post.title}</h2>
                <h3>PostId: {post.id}</h3>
                <code>{post.body}</code>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default PostsPage;
