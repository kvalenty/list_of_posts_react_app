import React from 'react';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { Post } from '../../interfaces/interfaces';

// const mapStateToProps = (state: RootState) => state;

// const connector = connect(mapStateToProps);

type Props = {
  post: Post;
};

export const PostItem = (props: Props) => {
  const { post } = props;
  console.log(post);

  return (
  <h1>{post.title}</h1>
  );
};

// export default connector(PostItem);
