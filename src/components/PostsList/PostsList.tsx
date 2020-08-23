import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState, Posts } from '../../interfaces/interfaces';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & {
  dispatch: Dispatch;
  posts: Posts;
};

const PostList = (props: Props) => {
  const { posts } = props;

  return (
    <h1>hello</h1>
  );
};

export default connector(PostList);
