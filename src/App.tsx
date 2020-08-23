import React, { useEffect } from 'react';
import { useDispatch, connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { loadPosts } from './components/api/api';
import { RootState, Posts } from './interfaces/interfaces';
import PostsList from './components/PostsList/PostsList';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & {
  dispatch: Dispatch;
  posts: Posts;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadPosts(dispatch);
  }, []);

  return (
    <PostsList />
  );
};

export default connector(App);
