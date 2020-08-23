import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { loadPosts } from './components/api/api';
import { RootState } from './interfaces/interfaces';
import PostsList from './components/PostsList/PostsList';
import AddPost from './components/AddPost/AddPost';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadPosts(dispatch);
  }, [dispatch]);

  return (
    <>
      <AddPost />
      <PostsList />
    </>
  );
};

export default connector(App);
