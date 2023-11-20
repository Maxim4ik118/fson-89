import React, { Suspense, lazy, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, fetchPostDetails } from 'redux/postDetails/postDetails.reducer';

const PostsComments = lazy(() => import('pages/PostsComments'));

const PostDetails = () => {
  const { postId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const postDetails = useSelector(state => state.magazine.postDetails);
  const isLoading = useSelector(state => state.magazine.isLoading);
  const error = useSelector(state => state.magazine.error);

  useEffect(() => {
    dispatch(fetchPostDetails(postId))
    dispatch(fetchContacts())
  }, [postId, dispatch]);

  return (
    <div>
      <h1>Post Details</h1>
      <Link to={backLinkRef.current}>Go back</Link>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {postDetails !== null && (
        <div>
          <h2>{postDetails.title}</h2>
          <h3>PostId: {postDetails.id}</h3>
          <code>{postDetails.body}</code>
        </div>
      )}
      <div>
        <NavLink className="header-link" to="comments">
          Comments
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<PostsComments />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default PostDetails;
