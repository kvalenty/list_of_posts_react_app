import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState, Posts } from '../../interfaces/interfaces';
import PostItem from '../PostItem/PostItem';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & {
  dispatch: Dispatch;
  posts: Posts;
};

const PostsList = (props: Props) => {
  const { posts: { posts } } = props;

  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  );
};

export default connector(PostsList);
