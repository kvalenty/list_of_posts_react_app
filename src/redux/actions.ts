import {
  Action,
  Post,
  Comment,
  CommentUpload,
} from '../interfaces/interfaces';
import {
  SET_POSTS,
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  SET_COMMENTS,
  UPDATE_COMMENTS,
} from './actionTypes';

export const setPreparedPosts = (payload: Post[]): Action<Post[]> => {
  return {
    type: SET_POSTS,
    payload,
  };
};

export const setComments = (payload: Comment[]): Action<Comment[]> => {
  return {
    type: SET_COMMENTS,
    payload,
  };
};

export const deletePost = (payload: number): Action<number> => {
  return {
    type: REMOVE_POST,
    payload,
  };
};

export const addPost = (payload: Post): Action<Post> => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const updatePost = (payload: Post): Action<Post> => {
  return {
    type: UPDATE_POST,
    payload,
  };
};

export const updateComments = (postId: number, body: string): Action<CommentUpload> => {
  return {
    type: UPDATE_COMMENTS,
    payload: { postId, body },
  };
};
